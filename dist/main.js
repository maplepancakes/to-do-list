(()=>{"use strict";const t=function(){let t=0,e=0,n={};return{consoleLogStorage:function(){console.log(n)},incrementTaskID:function(){t++,console.log(`Increased taskID to: ${t}`)},incrementProjectID:function(){e++,console.log(`Increased projectID to: ${e}`)},storeProject:function(t){n[`${t}`]=[]},getTaskID:function(){return t},getProjectID:function(){return e},getProjectObjectValue:function(t){return n[`${t}`]}}}(),e=function(e){t.storeProject(e),t.incrementProjectID(),t.consoleLogStorage()},n=function(t){return""===t?(console.log("Empty String: true"),!0):""!==t?(console.log("Empty string: false"),!1):void 0},o=function(){const e=document.querySelector("body"),n=document.createElement("div");return n.setAttribute("id","content"),{loadInitialContents:function(){!function(){const t=document.createElement("header"),n=document.createElement("h1"),o=document.createElement("button");n.textContent="To Do List ✔",o.classList.add("button-style"),o.setAttribute("id","new-project-button"),o.setAttribute("type","menu"),o.textContent="+ Add Project",e.appendChild(t),t.appendChild(n),t.appendChild(o)}(),function(){const t=document.createElement("div"),o=document.createElement("h2"),c=document.createElement("div");t.setAttribute("id","project-container"),o.classList.add("project-contents-format"),o.setAttribute("id","project-header"),o.textContent="Projects",c.setAttribute("id","project-listing"),e.appendChild(n),n.appendChild(t),t.appendChild(o),t.appendChild(c)}()},loadNewProjectForm:function(){const t=document.createElement("div"),e=document.createElement("input"),n=document.createElement("button");t.setAttribute("id","new-project-form-container"),e.setAttribute("id","new-project-input"),e.setAttribute("placeholder","e.g. Daily Tasks"),e.setAttribute("type","text"),n.classList.add("button-style"),n.setAttribute("id","submit-new-project-button"),n.textContent="Add Project",document.querySelector("#project-listing").appendChild(t),t.appendChild(e),t.appendChild(n)},updateProjectListing:function(e){const n=document.querySelector("#project-container"),o=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div");console.log(`Updating project listing with value: ${e}`),o.classList.add("project-contents-format"),o.setAttribute("id",`project-content-${t.getProjectID()}`),c.classList.add("project-content"),c.setAttribute("id",`project-description-${t.getProjectID()}`),c.textContent=e,r.classList.add("project-content"),r.setAttribute("id",`add-task-${t.getProjectID}`),r.textContent="+",n.appendChild(o),o.appendChild(c),o.appendChild(r)},updateAttribute:function(t,e,n){document.querySelector(t)[`${e}`]=`${n}`},removeElementFromParent:function(t,e){const n=document.querySelector(`${t}`),o=document.querySelector(`${e}`);n.removeChild(o)}}}();o.loadInitialContents(),document.querySelector("#new-project-button").addEventListener("click",(function(c){const r=document.querySelector("#new-project-form-container");if(r){if(r)return}else o.loadNewProjectForm(),document.querySelector("#submit-new-project-button").addEventListener("click",(function(c){const r=document.querySelector("#new-project-input");if(!1===n(r.value))if(t.getProjectObjectValue(r.value)){if(t.getProjectObjectValue(r.value))return}else e(r.value),o.updateProjectListing(r.value),o.updateAttribute("#new-project-input","value",""),o.updateAttribute("#new-project-input","placeholder","e.g. Daily Tasks");else if(!0===n(r.value))return void o.updateAttribute("#new-project-input","placeholder","Type something here...")}))}))})();