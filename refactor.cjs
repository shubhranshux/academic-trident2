const fs = require('fs');

// 1. App.jsx
let app = fs.readFileSync('src/App.jsx', 'utf8');
app = app.replace(
  "import DepartmentPage from './pages/DepartmentPage';",
  "import DepartmentPage from './pages/DepartmentPage';\nimport DepartmentOverview from './pages/DepartmentOverview';"
);
app = app.replace(
  '<Route path="/:slug" element={<DepartmentPage />} />',
  '<Route path="/:slug" element={<DepartmentPage />} />\n            <Route path="/:slug/overview" element={<DepartmentOverview />} />'
);
fs.writeFileSync('src/App.jsx', app);

// 2. DepartmentOverview.jsx
let overview = fs.readFileSync('src/pages/DepartmentOverview.jsx', 'utf8');
overview = overview.replace(
  'export default function DepartmentPage() {',
  'export default function DepartmentOverview() {'
);
overview = overview.replace(
  "const { slug, subpage = 'overview' } = useParams();",
  "const { slug } = useParams();\n  const subpage = 'overview';"
);

// We need to keep only the overview section. We'll find the index of "RESEARCH" and cut everything until the end of Main Content
const researchStart = overview.indexOf('{/* RESEARCH */}');
const mainContentEnd = overview.indexOf('</div>\n        </div>\n      </div>'); // the end of <div className="flex-1 min-w-0">
if (researchStart !== -1 && mainContentEnd !== -1) {
  const contentToRemove = overview.slice(researchStart, mainContentEnd);
  overview = overview.replace(contentToRemove, '');
}
fs.writeFileSync('src/pages/DepartmentOverview.jsx', overview);

// 3. DepartmentPage.jsx
let page = fs.readFileSync('src/pages/DepartmentPage.jsx', 'utf8');

// If subpage is undefined or 'overview', redirect to /slug/overview
page = page.replace(
  "const data = getDepartment(slug);",
  "const data = getDepartment(slug);\n\n  if (!subpage || subpage === 'overview') {\n    return <Navigate to={`/${slug}/overview`} replace />;\n  }"
);

// Remove the OVERVIEW section from DepartmentPage
const overviewStart = page.indexOf('{/* OVERVIEW */}');
const overviewEnd = page.indexOf('{/* RESEARCH */}');
if (overviewStart !== -1 && overviewEnd !== -1) {
  const contentToRemove = page.slice(overviewStart, overviewEnd);
  page = page.replace(contentToRemove, '');
}
fs.writeFileSync('src/pages/DepartmentPage.jsx', page);

console.log("Done refactoring.");
