(()=>{"use strict";null===localStorage.getItem("taskID")&&null===localStorage.getItem("projectID")&&null===localStorage.getItem("projectObject")&&(localStorage.setItem("taskID","0"),localStorage.setItem("projectID","0"),localStorage.setItem("projectObject",JSON.stringify({})));const t=function(){let t=localStorage.getItem("taskID"),e=localStorage.getItem("projectID"),o=JSON.parse(localStorage.getItem("projectObject"));return{taskID:t,projectID:e,projectObject:o,optionValue:["High","Medium","Low"],priorityColour:["priority-color-high","priority-color-medium","priority-color-low"],getTaskForProject:function(t){return o[`${t}`]},consoleLogStorage:function(){console.log(o)}}}(),e=function(){t.taskID++,localStorage.setItem("taskID",JSON.stringify(t.taskID)),console.log(`Increased taskID to: ${t.taskID}`)},o=function(){t.projectID++,localStorage.setItem("projectID",JSON.stringify(t.projectID)),console.log(`Increased projectID to: ${t.projectID}`)},n=function(e){t.projectObject[`${e}`]=[`${t.projectID}`],localStorage.setItem("projectObject",JSON.stringify(t.projectObject)),console.log(`Added ${e} to projectObject`),t.consoleLogStorage()},r=function(e){delete t.projectObject[`${e}`],localStorage.setItem("projectObject",JSON.stringify(t.projectObject)),console.log(`Deleted ${e} from projectObject`),t.consoleLogStorage()},c=function(e,o){t.projectObject[`${o}`].push(e),localStorage.setItem("projectObject",JSON.stringify(t.projectObject)),console.log(t.consoleLogStorage())},a=function(e,o,n,r,c,a){let l=t.projectObject[`${o}`];l=l.findIndex((function(t){return parseInt(t.taskID)===e}));let i=t.projectObject[`${o}`];i[l].taskName=n,i[l].dueDate=r,i[l].priorityColour=c,i[l].priority=a,localStorage.setItem("projectObject",JSON.stringify(t.projectObject)),console.log(t.consoleLogStorage())},l=function(e,o){let n=t.projectObject[`${o}`];n=n.filter((function(t){return parseInt(t.taskID)!==e})),console.log(n),t.projectObject[`${o}`]=n,localStorage.setItem("projectObject",JSON.stringify(t.projectObject)),console.log(t.consoleLogStorage())},i=function(t,e){return(t=(t=t.split("")).splice(e)).join("")},d=function(e){return"High"===e?t.priorityColour[0]:"Medium"===e?t.priorityColour[1]:"Low"===e?t.priorityColour[2]:void 0},s=function(t){n(t),o()},u=function(o,n,r,c){this.taskID=t.taskID,this.taskName=o,this.dueDate=n,this.priorityColour=r,this.priority=c,e()},p=function(){const e=document.querySelector("body"),o=document.createElement("div");return o.setAttribute("id","content"),{loadInitialContents:function(){!function(){const t=document.createElement("header"),o=document.createElement("h1"),n=document.createElement("button");console.log("Loading page header..."),o.textContent="To Do List ✔",n.classList.add("button-style"),n.setAttribute("id","new-project-button"),n.setAttribute("type","menu"),n.textContent="+ Add Project",e.appendChild(t),t.appendChild(o),t.appendChild(n)}(),function(){const t=document.createElement("div"),n=document.createElement("h2"),r=document.createElement("div");console.log("Loading project container..."),t.setAttribute("id","project-container"),n.classList.add("project-contents-format"),n.setAttribute("id","project-header"),n.textContent="Projects",r.setAttribute("id","project-listing"),e.appendChild(o),o.appendChild(t),t.appendChild(n),t.appendChild(r)}(),function(){const t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("h1"),r=document.createElement("button"),c=document.createElement("div");console.log("Loading task container..."),t.setAttribute("id","task-container"),e.setAttribute("id","task-header-container"),n.setAttribute("id","task-header"),n.textContent="",r.classList.add("button-style"),r.setAttribute("id","delete-project-button-hidden"),c.setAttribute("id","task-listing"),o.appendChild(t),t.appendChild(e),e.appendChild(n),e.appendChild(r),t.appendChild(c)}(),function(){const e=document.querySelector("#project-listing");console.log("Loading existing projects... ");for(const o in t.projectObject){const n=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");n.classList.add("project-contents-format"),n.classList.add("project-contents"),n.setAttribute("id",`project-content-${t.projectObject[`${o}`][0]}`),r.classList.add("project-content"),r.classList.add("project-description"),r.setAttribute("id",`project-description-${t.projectObject[`${o}`][0]}`),r.textContent=o,c.classList.add("project-content"),c.classList.add("project-add-task-icon"),c.setAttribute("id",`add-task-${t.projectObject[`${o}`][0]}`),c.textContent="+",e.appendChild(n),n.appendChild(r),n.appendChild(c)}}()},loadNewProjectForm:function(){const t=document.querySelector("#project-container"),e=document.createElement("div"),o=document.createElement("input"),n=document.createElement("button");e.setAttribute("id","new-project-form-container"),o.setAttribute("id","new-project-input"),o.setAttribute("placeholder","e.g. Daily Tasks"),o.setAttribute("type","text"),n.classList.add("button-style"),n.setAttribute("id","submit-new-project-button"),n.textContent="Add Project",t.appendChild(e),e.appendChild(o),e.appendChild(n)},updateProjectListing:function(e){const o=document.querySelector("#project-listing"),n=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");console.log(`Updating project listing with value: ${e}`),n.classList.add("project-contents-format"),n.classList.add("project-contents"),n.setAttribute("id",`project-content-${t.projectID}`),r.classList.add("project-content"),r.classList.add("project-description"),r.setAttribute("id",`project-description-${t.projectID}`),r.textContent=e,c.classList.add("project-content"),c.classList.add("project-add-task-icon"),c.setAttribute("id",`add-task-${t.projectID}`),c.textContent="+",o.appendChild(n),n.appendChild(r),n.appendChild(c)},loadNewTaskForm:function(e){let o=[];const n=document.createElement("div"),r=document.createElement("label"),c=document.createElement("input"),a=document.createElement("label"),l=document.createElement("input"),i=document.createElement("label"),d=document.createElement("select"),s=document.createElement("button");for(let t=0;t<3;t++)o[t]=document.createElement("option");console.log("Loading new task form..."),n.classList.add("new-task-input"),r.setAttribute("for","task-name"),r.textContent="Task Name:",c.setAttribute("name","task-name"),c.setAttribute("placeholder","e.g. Feed dog"),c.setAttribute("type","test"),a.setAttribute("for","due-date"),a.textContent="Due Date:",l.setAttribute("name","due-date"),l.setAttribute("type","text"),l.setAttribute("onblur","this.type='text'"),l.setAttribute("placeholder","YYYY/MM/DD"),l.setAttribute("onfocus","this.type='date'"),i.setAttribute("for","priority"),i.textContent="Priority",d.setAttribute("name","priority");for(let e=0;e<t.optionValue.length;e++)o[e].setAttribute("value",`${t.optionValue[e]}`),o[e].textContent=`${t.optionValue[e]}`;s.classList.add("button-style"),s.classList.add("new-task-button"),s.setAttribute("type","submit"),s.textContent="Add Task",document.querySelector(`${e}`).appendChild(n),n.appendChild(r),n.appendChild(c),n.appendChild(a),n.appendChild(l),n.appendChild(i),n.appendChild(d);for(let t=0;t<3;t++)d.appendChild(o[t]);n.appendChild(s)},updateTaskListing:function(t,e="",o="",n="",r=""){const c=document.querySelector("#task-listing"),a=document.createElement("div"),l=document.createElement("label"),i=document.createElement("label"),d=document.createElement("label"),s=document.createElement("label"),u=document.createElement("button");a.classList.add("task-contents-format"),a.setAttribute("id",`task-content-${t}`),l.classList.add("icon"),l.setAttribute("id",`delete-icon-${t}`),l.textContent="X",i.classList.add("task-name-label"),i.setAttribute("id",`task-name-${t}`),i.textContent=`${e}`,d.classList.add("due-date-label"),d.setAttribute("id",`due-date-${t}`),d.textContent=`${o}`,s.classList.add("priority-label"),s.classList.add(`${n}`),s.setAttribute("id",`priority-${t}`),s.textContent=`${r}`,u.classList.add("task-container-buttons"),u.classList.add("button-style"),u.setAttribute("id",`edit-button-${t}`),u.setAttribute("type","menu"),u.textContent="✏️ Edit",c.appendChild(a),a.appendChild(l),a.appendChild(i),a.appendChild(d),a.appendChild(s),a.appendChild(u)},reUpdateTaskListingWithoutEditButton:function(e,o="",n="",r="",c="",a="label",l="label",i="label"){const d=document.querySelector(`#task-content-${e}`),s=document.querySelector(`#edit-button-${e}`),u=document.createElement("label"),p=document.createElement(`${a}`),m=document.createElement(`${l}`),b=document.createElement(`${i}`);if("label"===a&&"label"===l&&"label"===i&&(u.classList.add("icon"),u.setAttribute("id",`delete-icon-${e}`),u.textContent="X"),p.classList.add("task-name-label"),p.setAttribute("id",`task-name-${e}`),"label"===a?p.textContent=`${o}`:"input"===a&&(p.setAttribute("type","text"),p.setAttribute("placeholder","Task Name")),m.classList.add("due-date-label"),m.setAttribute("id",`due-date-${e}`),"label"===l?m.textContent=`${n}`:"input"===l&&(m.setAttribute("type","text"),m.setAttribute("onblur","this.type='text'"),m.setAttribute("placeholder","YYYY/MM/DD"),m.setAttribute("onfocus","this.type='date'")),b.classList.add("priority-label"),b.classList.add(`${r}`),b.setAttribute("id",`priority-${e}`),"label"===i)b.textContent=`${c}`;else if("select"===i){const e=[];for(let o=0;o<t.optionValue.length;o++)e[o]=document.createElement("option"),e[o].setAttribute("value",`${t.optionValue[o]}`),e[o].textContent=`${t.optionValue[o]}`,b.appendChild(e[o])}d.insertBefore(p,s),d.insertBefore(m,s),d.insertBefore(b,s)},appendSeparator:function(t){const e=document.querySelector("#task-listing"),o=document.createElement("div");o.classList.add("separator"),o.setAttribute("id",`separator-${t}`),e.appendChild(o)},updateAttribute:function(t,e,o){const n=document.querySelector(`${t}`);console.log(`Updating ${e} of ${n} to ${o}`),n[`${e}`]=`${o}`},updateAllAttributes:function(t,e,o){const n=document.querySelectorAll(`${t}`);for(let t=0;t<n.length;t++)n[t][`${e}`]=`${o}`},removeElementFromParent:function(t,e){const o=document.querySelector(`${t}`),n=document.querySelector(`${e}`);console.log(`Removing ${n.id} from ${o.id}`),o.removeChild(n)},removeAllElementsFromParent:function(t,e){const o=document.querySelector(`${t}`),n=document.querySelectorAll(`${e}`);console.log(`Removing all ${n} from ${o.id}`);for(let t=0;t<n.length;t++)o.removeChild(n[t])}}}();console.log(t.taskID),console.log(t.projectID),console.log(t.projectObject);const m=function(){const t=document.querySelector("#task-header"),e=document.querySelectorAll(".icon");for(let o=0;o<e.length;o++)e[o].onclick=function(n){let r=e[o].id;r=i(r,12),r=parseInt(r),l(r,t.textContent),p.removeElementFromParent("#task-listing",`#task-content-${r}`),p.removeElementFromParent("#task-listing",`#separator-${r}`)}},b=function(){const t=document.querySelector("#task-header"),e=document.querySelectorAll(".task-container-buttons");for(let o=0;o<e.length;o++)e[o].onclick=function(n){let r=e[o].id;if(r=i(r,12),r=parseInt(r),console.log(e[o].textContent),"✏️ Edit"===e[o].textContent)return p.removeElementFromParent(`#task-content-${r}`,`#task-name-${r}`),p.removeElementFromParent(`#task-content-${r}`,`#due-date-${r}`),p.removeElementFromParent(`#task-content-${r}`,`#priority-${r}`),p.reUpdateTaskListingWithoutEditButton(r,"taskName","dueDate","priorityColour","priority","input","input","select"),void p.updateAttribute(`#edit-button-${r}`,"textContent","✔");e[o].textContent;{const e=document.querySelector(`#task-name-${r}`),o=document.querySelector(`#due-date-${r}`),n=document.querySelector(`#priority-${r}`);return""===e.value&&p.updateAttribute(`#task-name-${r}`,"placeholder","Type something here..."),""===o.value&&p.updateAttribute(`#due-date-${r}`,"placeholder","Input date here..."),void(""!==e.value&&""!==o.value&&(a(r,t.textContent,e.value,o.value,d(n.value),n.value),p.removeElementFromParent(`#task-content-${r}`,`#task-name-${r}`),p.removeElementFromParent(`#task-content-${r}`,`#due-date-${r}`),p.removeElementFromParent(`#task-content-${r}`,`#priority-${r}`),p.reUpdateTaskListingWithoutEditButton(r,e.value,o.value,d(n.value),n.value),p.updateAttribute(`#edit-button-${r}`,"textContent","✏️ Edit")))}}},j=function(){g=document.querySelectorAll(".project-description");for(let e=0;e<g.length;e++)g[e].onclick=function(o){p.updateAttribute("#task-header","textContent",`${g[e].textContent}`),document.querySelector("#delete-project-button-hidden")&&(p.updateAttribute("#delete-project-button-hidden","id","delete-project-button"),p.updateAttribute("#delete-project-button","textContent","Delete Project"));const n=document.querySelectorAll(".task-contents-format");document.querySelector("#delete-project-button").onclick=function(t){r(g[e].textContent);let o=g[e].id;o=i(o,20),n&&(p.removeAllElementsFromParent("#task-listing",".task-contents-format"),p.removeAllElementsFromParent("#task-listing",".separator")),p.removeElementFromParent("#project-listing",`#project-content-${o}`),p.updateAttribute("#delete-project-button","id","delete-project-button-hidden"),p.updateAttribute("#task-header","textContent","")},n&&(p.removeAllElementsFromParent("#task-listing",".task-contents-format"),p.removeAllElementsFromParent("#task-listing",".task-contents-format-edit"),p.removeAllElementsFromParent("#task-listing",".separator"));const c=t.getTaskForProject(g[e].textContent);console.log(c);for(let t=1;t<c.length;t++)p.updateTaskListing(c[t].taskID,c[t].taskName,c[t].dueDate,c[t].priorityColour,c[t].priority),p.appendSeparator(c[t].taskID);m(),b()};k=document.querySelectorAll(".project-add-task-icon");for(let e=0;e<k.length;e++)k[e].onclick=function(o){let n=k[e].id;if(n=i(n,9),"-"===k[e].textContent)p.removeElementFromParent(`#project-content-${n}`,".new-task-input"),p.updateAttribute(`#add-task-${n}`,"textContent","+");else if("+"===k[e].textContent){for(let t=0;t<k.length;t++){let e=k[t].id;e=i(e,9),"-"===k[t].textContent&&(p.removeElementFromParent(`#project-content-${e}`,".new-task-input"),p.updateAttribute(`#add-task-${e}`,"textContent","+"))}p.loadNewTaskForm(`#project-content-${n}`),p.updateAttribute(`#add-task-${n}`,"textContent","-");const e=document.querySelectorAll("input[name='task-name']"),o=document.querySelectorAll("input[name='due-date']"),r=document.querySelectorAll("select[name='priority']"),a=document.querySelectorAll(".new-task-button");for(let l=0;l<a.length;l++)a[l].onclick=function(a){""===e[l].value&&e[l].setAttribute("placeholder","Type something here..."),""===o[l].value&&o[l].setAttribute("placeholder","Input date here...");const i=document.querySelector(`#project-description-${n}`),s=document.querySelector("#task-header");if(i.textContent===s.textContent&&""!==e[l].value&&""!==o[l].value&&(p.updateTaskListing(t.taskID,e[l].value,o[l].value,d(r[l].value),r[l].value),p.appendSeparator(t.taskID)),""!==e[l].value&&""!==o[l].value){const t=new u(e[l].value,o[l].value,d(r[l].value),r[l].value);c(t,i.textContent),p.updateAttribute("input[name='task-name']","value",""),p.updateAttribute("input[name='task-name']","placeholder","e.g. Feed dog"),p.updateAttribute("input[name='due-date']","value",""),p.updateAttribute("input[name='due-date']","placeholder","YYYY/MM/DD")}m(),b()}}}};p.loadInitialContents();let g=document.querySelectorAll(".project-description"),k=document.querySelectorAll(".project-add-task-icon");j();const A=document.querySelector("#new-project-button");A.onclick=function(e){if("- Add Project"===A.textContent)p.updateAttribute("#new-project-button","textContent","+ Add Project"),p.removeElementFromParent("#project-container","#new-project-form-container");else if("+ Add Project"===A.textContent){p.updateAttribute("#new-project-button","textContent","- Add Project"),p.loadNewProjectForm();const e=document.querySelector("#submit-new-project-button");console.log(e),e.onclick=function(e){const o=document.querySelector("#new-project-input");""!==o.value?t.projectObject[`${o.value}`]||(p.updateProjectListing(o.value),s(o.value),p.updateAttribute("#new-project-input","value",""),p.updateAttribute("#new-project-input","placeholder","e.g. Daily Tasks"),j()):""===o.value&&p.updateAttribute("#new-project-input","placeholder","Type something here...")}}}})();