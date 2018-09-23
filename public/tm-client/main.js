(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./usr/src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./usr/src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./usr/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./usr/src/app/app.component.css":
/*!***********************************!*\
  !*** ./usr/src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./usr/src/app/app.component.html":
/*!************************************!*\
  !*** ./usr/src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<div>\r\n  <h2 style=\"text-align:center;\">TASK MANAGER</h2>\r\n</div>\r\n<hr>\r\n<nav class=\"navbar navbar-expand-sm bg-light\">\r\n    <div class=\"container-fluid\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"create\" class=\"nav-link\" routerLinkActive=\"active\">\r\n            Add Task\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"index\" class=\"nav-link\" routerLinkActive=\"active\">\r\n           View All Tasks\r\n          </a>\r\n        </li> \r\n      </ul>\r\n    </div>\r\n  </nav>\r\n\r\n<div style=\"width:100%; padding:0 20% 0 20%\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./usr/src/app/app.component.ts":
/*!**********************************!*\
  !*** ./usr/src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./usr/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./usr/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./usr/src/app/app.module.ts":
/*!*******************************!*\
  !*** ./usr/src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./usr/src/app/app.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create/create.component */ "./usr/src/app/components/create/create.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/index/index.component */ "./usr/src/app/components/index/index.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit/edit.component */ "./usr/src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_filters_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filters/filter.pipe */ "./usr/src/app/components/filters/filter.pipe.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks.service */ "./usr/src/app/tasks.service.ts");
/* harmony import */ var _components_filters_findtaskname_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/filters/findtaskname.pipe */ "./usr/src/app/components/filters/findtaskname.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import 3rd party modules -- ++ imports





// import component -- ++ in Declaration





//import service -- ++ in provider


var routes = [
    { path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"] },
    { path: 'index', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"] },
    { path: 'finish/:id', component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"] },
    { path: '', redirectTo: '/create', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"],
                _components_filters_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"],
                _components_filters_findtaskname_pipe__WEBPACK_IMPORTED_MODULE_13__["FindtasknamePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_tasks_service__WEBPACK_IMPORTED_MODULE_12__["TasksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./usr/src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./usr/src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./usr/src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./usr/src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"card\"  style=\"width:75%; height:50%\">\r\n    \r\n    <div class=\"card-body\">\r\n          <form class=\"form-horizontal\" [formGroup]=\"addTaskForm\" novalidate>\r\n              \r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-4\">Task Name</label>\r\n                <input type=\"text\" autocomplete=\"off\" class=\"form-control\" \r\n                name=\"task\" formControlName=\"task\" #task/>\r\n            </div>\r\n            <div *ngIf=\"addTaskForm.controls['task'].invalid && \r\n            (addTaskForm.controls['task'].dirty || addTaskForm.controls['task'].touched)\" \r\n            class=\"alert alert-danger\">\r\n                <div *ngIf=\"addTaskForm.controls['task'].errors.required\">\r\n                Task Name is required.\r\n                </div>\r\n            </div>\r\n          \r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"col-md-4\">Parent Task</label>\r\n               <input name=\"parent_id\" type=\"text\" class=\"form-control\" \r\n               (selectItem)=\"selectedItem($event)\" \r\n               [(ngModel)]=\"selectedParent\" [ngbTypeahead]=\"search\" \r\n               [resultFormatter]=\"formatter\" [inputFormatter]=\"formatter\" \r\n               [ngModelOptions]=\"{standalone: true}\"/>\r\n            </div>\r\n      \r\n          <div class=\"form-group\">\r\n              <label class=\"control-label col-sm-2\">Priority:</label>\r\n              <div class=\"col-sm-10\">   \r\n                    <input type=\"range\" min=\"0\" max=\"30\" class=\"form-control\" name=\"priority\"\r\n                    formControlName=\"priority\" #priority/>\r\n                   \r\n            </div>\r\n          </div>\r\n         <div *ngIf=\"addTaskForm.controls['priority'].invalid && \r\n            (addTaskForm.controls['priority'].dirty || addTaskForm.controls['priority'].touched)\" \r\n            class=\"alert alert-danger\">\r\n                <div *ngIf=\"addTaskForm.controls['priority'].errors.required\">\r\n                Priority is required.\r\n                </div>\r\n            </div>\r\n\r\n        \r\n          <div class=\"form-group\">\r\n                <label class=\"col-md-4\">Start Date</label>\r\n                <input type=\"date\" class=\"form-control\" name=\"start_date\" \r\n                formControlName=\"start_date\" #start_date/>\r\n              </div>\r\n              <div *ngIf=\"addTaskForm.controls['start_date'].invalid && \r\n              (addTaskForm.controls['start_date'].dirty || addTaskForm.controls['start_date'].touched)\" \r\n              class=\"alert alert-danger\">\r\n                <div *ngIf=\"addTaskForm.controls['start_date'].errors.required\">\r\n                  Start Date is required.\r\n                </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n                <label class=\"col-md-4\">End Date</label>\r\n                <input type=\"date\" class=\"form-control\" name=\"end_date\" \r\n                formControlName=\"end_date\" #end_date/>\r\n              </div>\r\n              <div *ngIf=\"addTaskForm.controls['end_date'].invalid && \r\n              (addTaskForm.controls['end_date'].dirty || addTaskForm.controls['end_date'].touched)\" \r\n              class=\"alert alert-danger\">\r\n                <div *ngIf=\"addTaskForm.controls['end_date'].errors.required\">\r\n                  End Date is required.\r\n                </div>\r\n        </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n              <button (click)=\"addTask(task.value,priority.value,start_date.value,end_date.value)\" \r\n                [disabled]=\"addTaskForm.pristine || addTaskForm.invalid\" \r\n                class=\"btn btn-primary btn-xs\">Create Task</button>\r\n          </div>\r\n      </form>\r\n      </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./usr/src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./usr/src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks.service */ "./usr/src/app/tasks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateComponent = /** @class */ (function () {
    function CreateComponent(route, router, tasksservice, fb) {
        this.route = route;
        this.router = router;
        this.tasksservice = tasksservice;
        this.fb = fb;
        this.selectedParent = null;
        this.createForm();
    }
    CreateComponent.prototype.ngbdTypeaheadTemplate = function () {
        var _this = this;
        this.formatter = function (x) {
            console.log(x);
            return x.task;
        };
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term === '' ? []
                : _this.tasksResult.filter(function (tr) { return tr.task.toLowerCase().indexOf(term.toLowerCase()) > -1; }); });
        };
    };
    CreateComponent.prototype.selectedItem = function (item) {
        this.clickedItem = item.item._id;
        console.log('here we go');
        console.log(this.clickedItem);
    };
    CreateComponent.prototype.createForm = function () {
        this.addTaskForm = this.fb.group({
            task: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parent_id: [''],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CreateComponent.prototype.addTask = function (task, priority, start_date, end_date) {
        if (this.clickedItem)
            this.parent_id = this.clickedItem;
        else
            this.parent_id = "";
        this.tasksservice.addTaskRecord(task, this.parent_id, priority, start_date, end_date);
        this.router.navigate(['index']);
        window.location.reload();
    };
    CreateComponent.prototype.findalltask = function () {
        var _this = this;
        return this.tasksservice
            .getAllTasks()
            .subscribe(function (data) {
            _this.tasksResult = data;
            console.log(_this.tasksResult);
        });
    };
    CreateComponent.prototype.ngOnInit = function () {
        this.ngbdTypeaheadTemplate();
        this.findalltask();
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./usr/src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./usr/src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./usr/src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./usr/src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./usr/src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./usr/src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <hr>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <form class=\"form-horizontal\" [formGroup]=\"editTaskForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-4\">Task Name</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"task\" formControlName=\"task\" #task \r\n                    [(ngModel)] = \"tasks.task\"/>\r\n                </div>\r\n                <div *ngIf=\"editTaskForm.controls['task'].invalid && \r\n                (editTaskForm.controls['task'].dirty || editTaskForm.controls['task'].touched)\" \r\n                class=\"alert alert-danger\">\r\n                    <div *ngIf=\"editTaskForm.controls['task'].errors.required\">\r\n                    Task Name is required.\r\n                    </div>\r\n                </div>\r\n              \r\n                <div class=\"form-group\">\r\n                  <label class=\"col-md-4\">Parent Task</label>\r\n                  <input type=\"text\" class=\"form-control\" name=\"parent_id\"\r\n                   formControlName=\"parent_id\" />\r\n                </div>\r\n               \r\n              <div class=\"form-group\">\r\n                  <label class=\"control-label col-sm-2\">Priority:</label>\r\n                  <div class=\"col-sm-10\">   \r\n                        <input type=\"range\"  min=\"0\" max=\"30\" class=\"form-control\" name=\"priority\"\r\n                        formControlName=\"priority\" #priority  [(ngModel)] = \"tasks.priority\"/>\r\n                </div>\r\n              </div>\r\n             <div *ngIf=\"editTaskForm.controls['priority'].invalid && \r\n                (editTaskForm.controls['priority'].dirty || editTaskForm.controls['priority'].touched)\" \r\n                class=\"alert alert-danger\">\r\n                    <div *ngIf=\"editTaskForm.controls['priority'].errors.required\">\r\n                    Priority is required.\r\n                    </div>\r\n                </div>\r\n    \r\n            \r\n              <div class=\"form-group\">\r\n                    <label class=\"col-md-4\">Start Date</label>\r\n                    <input type=\"date\" class=\"form-control\" name=\"start_date\"  formControlName=\"start_date\"\r\n                    [ngModel] =\"tasks.start_date | date:'yyyy-MM-dd'\" #start_date>\r\n                   \r\n                  </div>\r\n                  <div *ngIf=\"editTaskForm.controls['start_date'].invalid && \r\n                  (editTaskForm.controls['start_date'].dirty || editTaskForm.controls['start_date'].touched)\" \r\n                  class=\"alert alert-danger\">\r\n                    <div *ngIf=\"editTaskForm.controls['start_date'].errors.required\">\r\n                      Start Date is required.\r\n                    </div>\r\n            </div>\r\n    \r\n    \r\n            <div class=\"form-group\">\r\n                    <label class=\"col-md-4\">End Date</label>\r\n                  <input type=\"date\" class=\"form-control\" name=\"end_date\"  formControlName=\"end_date\"\r\n                     [ngModel] =\"tasks.end_date | date:'yyyy-MM-dd'\" #end_date>\r\n                  </div>\r\n                  <div *ngIf=\"editTaskForm.controls['end_date'].invalid && \r\n                  (editTaskForm.controls['end_date'].dirty || editTaskForm.controls['end_date'].touched)\" \r\n                  class=\"alert alert-danger\">\r\n                    <div *ngIf=\"editTaskForm.controls['end_date'].errors.required\">\r\n                      End Date is required.\r\n                    </div>\r\n            </div>\r\n    \r\n    \r\n              <div class=\"form-group\">\r\n                  <button (click)=\"updateTask(task.value,priority.value,start_date.value,end_date.value)\" \r\n                    [disabled]=\"editTaskForm.pristine || editTaskForm.invalid\" \r\n                    class=\"btn btn-primary\">Update Task</button> &nbsp; \r\n                    <a [routerLink]=\"['/index']\" class=\"btn btn-primary\">Cancel</a>\r\n              </div>\r\n          </form>\r\n          </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./usr/src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./usr/src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tasks.service */ "./usr/src/app/tasks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs-compat/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, tasksservice, fb) {
        this.route = route;
        this.router = router;
        this.tasksservice = tasksservice;
        this.fb = fb;
        this.tasks = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.editTaskForm = this.fb.group({
            task: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            parent_id: [''],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        this.findbyID();
    };
    EditComponent.prototype.findbyID = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tasksservice.getTaskByID(params['id']).subscribe(function (res) {
                _this.tasks = res;
            });
        });
    };
    EditComponent.prototype.updateTask = function (task, priority, start_date, end_date) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tasksservice.updateRecord(task, priority, start_date, end_date, params['id']);
            _this.router.navigate(['index']);
            window.location.reload();
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./usr/src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./usr/src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./usr/src/app/components/filters/filter.pipe.ts":
/*!***************************************************!*\
  !*** ./usr/src/app/components/filters/filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks.service */ "./usr/src/app/tasks.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPipe = /** @class */ (function () {
    function FilterPipe(tasksservice) {
        this.tasksservice = tasksservice;
    }
    FilterPipe.prototype.transform = function (items, q1, q2, q3, q4, q5, q6) {
        if (items && items.length) {
            return items.filter(function (item) {
                if (q1 && item.task.toLowerCase().indexOf(q1.toLowerCase()) === -1) {
                    return false;
                }
                if (q2 && q3) {
                    if (!(item.priority >= parseInt(q2) && item.priority <= parseInt(q3))) {
                        return false;
                    }
                }
                else {
                    if (q2) {
                        if (!isNaN(q2) && item.priority != parseInt(q2)) {
                            return false;
                        }
                    }
                    if (q3) {
                        if (!isNaN(q3) && item.priority != parseInt(q3)) {
                            return false;
                        }
                    }
                }
                if (q4 && item.start_date.toLowerCase().indexOf(q5.toLowerCase()) === -1) {
                    return false;
                }
                if (q5 && item.start_date.toLowerCase().indexOf(q5.toLowerCase()) === -1) {
                    return false;
                }
                if (q6 && item.end_date.toLowerCase().indexOf(q6.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
            pure: false
        }),
        __metadata("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"]])
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./usr/src/app/components/filters/findtaskname.pipe.ts":
/*!*********************************************************!*\
  !*** ./usr/src/app/components/filters/findtaskname.pipe.ts ***!
  \*********************************************************/
/*! exports provided: FindtasknamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindtasknamePipe", function() { return FindtasknamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FindtasknamePipe = /** @class */ (function () {
    function FindtasknamePipe() {
    }
    FindtasknamePipe.prototype.transform = function (taskId, tasks) {
        var foundTask = tasks.filter(function (task) { return task._id == taskId; })[0];
        return !!foundTask ? foundTask.task : '-';
    };
    FindtasknamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'findtaskname'
        })
    ], FindtasknamePipe);
    return FindtasknamePipe;
}());



/***/ }),

/***/ "./usr/src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./usr/src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./usr/src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./usr/src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container container-fluid\" style =\"font-size:11px;\">\r\n<div class=\"jumbotron jumbotronCallCenter\">\r\n<div class=\"row\" style=\"height:20%\">\r\n    <div class=\"col-md-6\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label for=\"task\"><b>Task:</b></label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"q1\" >\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group-btn\">\r\n            <label for=\"priority_from\"><b>Priority From:</b></label>\r\n            <div class=\"input-group\">\r\n                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"q2\" ></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group-btn\">\r\n            <label for=\"priority_to\"><b>Priority To:</b></label>\r\n            <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"q3\" ></div></div>\r\n            </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\" role=\"form\">\r\n        <div class=\"form-group\">\r\n            <label for=\"parent_task\"><b>Parent Task:</b></label>\r\n            <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"q4\" ></div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n                <label for=\"start_date\"><b>Start Date:</b></label>\r\n                <div class=\"input-group-btn\">\r\n                        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"q5\" >\r\n        </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n                <label for=\"start_date\"><b>End Date:</b></label>\r\n                <div class=\"input-group-btn\">\r\n                        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"q6\" >\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<table class=\"table table-hover\" style =\"font-size:12px;\">\r\n    <thead>\r\n    <tr>\r\n        <td><b>Task Name</b></td>\r\n        <td><b>Parent Task</b></td>\r\n        <td><b>Priority</b></td>\r\n        <td><b>Start</b></td>\r\n        <td><b>End</b></td>\r\n        <td colspan=\"2\"></td>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n       <tr *ngFor=\"let TR of tasksResult | filter : q1: q2: q3: q4: q5: q6\">\r\n            <td>{{ TR.task }}</td>\r\n            <td>{{ TR.parent_id | findtaskname : tasksResult }}</td>\r\n            <td>{{ TR.priority }}</td>\r\n            <td>{{TR.start_date | date:\"dd-MMM-yyyy\"}}</td>\r\n            <td>{{TR.end_date | date:\"dd-MMM-yyyy\"}}</td>\r\n            <div *ngIf=\"TR.finished===false\">\r\n            <td><a [routerLink]=\"['/edit', TR._id]\" class=\"btn btn-primary btn-xs\">Edit</a></td>\r\n            <td><button (click)=\"finishingTask(TR._id)\"  class=\"btn btn-danger btn-xs\">End Task</button></td>\r\n                </div>\r\n        </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./usr/src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./usr/src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tasks.service */ "./usr/src/app/tasks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(route, router, tasksservice) {
        this.route = route;
        this.router = router;
        this.tasksservice = tasksservice;
        this.searchText = '';
        this.userFilter = '';
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.findalltask();
    };
    IndexComponent.prototype.findalltask = function () {
        var _this = this;
        this.tasksservice
            .getAllTasks()
            .subscribe(function (data) {
            _this.tasksResult = data;
        });
    };
    IndexComponent.prototype.finishingTask = function (id) {
        this.tasksservice.finishRecord(id);
        window.location.reload();
        this.router.navigate(['index']);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./usr/src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./usr/src/app/components/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tasks_service__WEBPACK_IMPORTED_MODULE_1__["TasksService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./usr/src/app/tasks.service.ts":
/*!**********************************!*\
  !*** ./usr/src/app/tasks.service.ts ***!
  \**********************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000/tm';
    }
    TasksService.prototype.addTaskRecord = function (task, parent_id, priority, start_date, end_date) {
        var _this = this;
        if (!parent_id)
            parent_id = null;
        var obj = {
            task: task,
            parent_id: parent_id,
            priority: priority,
            start_date: start_date,
            end_date: end_date
        };
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { console.log('Done'); }, function (error) { _this.ongetError(error); });
    };
    TasksService.prototype.ongetError = function (error) { };
    TasksService.prototype.getAllTasks = function () {
        return this.http.get(this.uri + "/");
    };
    TasksService.prototype.getTaskByID = function (id) {
        return this.http.get(this.uri + "/edit/" + id);
    };
    TasksService.prototype.updateRecord = function (task, priority, start_date, end_date, id) {
        var obj = {
            task: task,
            priority: priority,
            start_date: start_date,
            end_date: end_date
        };
        this
            .http
            .post(this.uri + "/update/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    TasksService.prototype.getTaskNameByID = function (parent_id) {
    };
    TasksService.prototype.finishRecord = function (id) {
        var obj = { finsihed: true };
        this
            .http
            .post(this.uri + "/finish/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    TasksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./usr/src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./usr/src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./usr/src/main.ts":
/*!*********************!*\
  !*** ./usr/src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./usr/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./usr/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./usr/src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\FSD\tm-client\src\main.ts */"./usr/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map