RAKING PRODUCTIONS — local test mode + branch tree
==================================================

1) RUN THE SITE WITH NO SUPABASE
   rp-config.js already says  window.RP_BACKEND = "local";
   - Open the folder that contains Community/ Education/ Games/ ... index/ with any static server
     (python3 -m http.server 8000  ->  http://localhost:8000/index/index.html) or just GitHub Pages.
     (Double-clicking the files also works in most browsers, but a server is safer.)
   - An orange "LOCAL TEST MODE" badge shows bottom-left. Click it to erase all local data.
   - Everything works: sign up, claim Creator (first account), roles, Refane, publish in every branch,
     paid tabs / courses / exams, Community + moderation, hiring, Coder, News, Pages, Site Code, Branch tree.
   - Data lives only in THIS browser (localStorage). Other browsers/devices start empty.
     Several tabs of the same browser share the data.
   - Testing tip: to give an account Refane, open the browser console on any RP page and run
       RPLocal.DB().t.rp_accounts.find(a=>a.username==="NAME").refane_balance=500; RPLocal.save()
   - Console helpers: RPLocal.reset() wipes everything; RPLocal.status() shows a storage-full warning.
   - Not a security boundary: anyone using the browser can edit the data. Never use for real users.

2) SWITCH SUPABASE BACK ON (only when you approve the whole site)
   a) In the Supabase SQL Editor run, in this order: account-system.sql, account-claim.sql, site-code.sql,
      games-content.sql, games-paid-tabs.sql, tools-content.sql, music-content.sql, education-content.sql,
      skills-content.sql, Labs/labs-content.sql, community-content.sql, branch-kit.sql, branches.sql  (NEW)
   b) In rp-config.js change "local" to "supabase".
   c) Test one page with ?backend=supabase first (add ?backend=local to go back; it is remembered per browser).

3) BRANCH TREE (Creator > "Branch tree" tab)
   - Pick any branch -> "+ Add sub-branch". Up to 3 levels below each main branch.
   - Per branch: name, label, icon, description, order, own colour (swatches or picker), background tone
     (Graphite / Midnight / Black / Slate), corner style (Sharp / Rounded / Soft), link, notice bar,
     maintenance mode + message, applications open/closed, members-only, visible on/off, page text.
   - Sub-branches inherit colour and look from their parent until you set their own.
   - Hub cards come from the tree. A branch with sub-branches (or page text) opens branch.html?b=KEY
     (breadcrumb + sub-branch cards); a plain branch opens its own link.
   - Sub-branches use their main branch's roles: applying to a sub-branch gives that main branch's
     Employee/Developer role. Policy / About / Contact pages and applications work per sub-branch.
   - Main branches can be edited or switched off, not deleted.

Files changed/new: rp-config.js, rp-backend.js, local/*.js, branch.html, branches.sql, rp-ui.js/.css,
kit-lib.js, kit-creator.js, index.html, info.html, apply.html, every page's <head> (backend scripts),
site-files.json.
