(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plus-plus-module"],{

/***/ "./node_modules/ionic2-calendar/calendar.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.js ***!
  \**************************************************/
/*! exports provided: Step, CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return Step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");



var Step;
(function (Step) {
    Step[Step["QuarterHour"] = 15] = "QuarterHour";
    Step[Step["HalfHour"] = 30] = "HalfHour";
    Step[Step["Hour"] = 60] = "Hour";
})(Step || (Step = {}));
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(calendarService, appLocale) {
        this.calendarService = calendarService;
        this.appLocale = appLocale;
        this.eventSource = [];
        this.calendarMode = 'month';
        this.formatDay = 'd';
        this.formatDayHeader = 'EEE';
        this.formatDayTitle = 'MMMM dd, yyyy';
        this.formatWeekTitle = 'MMMM yyyy, \'Week\' w';
        this.formatMonthTitle = 'MMMM yyyy';
        this.formatWeekViewDayHeader = 'EEE d';
        this.formatHourColumn = 'ha';
        this.showEventDetail = true;
        this.startingDayMonth = 0;
        this.startingDayWeek = 0;
        this.allDayLabel = 'all day';
        this.noEventsLabel = 'No Events';
        this.queryMode = 'local';
        this.step = Step.Hour;
        this.timeInterval = 60;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.preserveScrollPosition = false;
        this.lockSwipeToPrev = false;
        this.lockSwipes = false;
        this.locale = "";
        this.startHour = 0;
        this.endHour = 24;
        this.spaceBetween = 0;
        this.onCurrentDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hourParts = 1;
        this.hourSegments = 1;
        this.locale = appLocale;
    }
    Object.defineProperty(CalendarComponent.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        set: function (val) {
            if (!val) {
                val = new Date();
            }
            this._currentDate = val;
            this.calendarService.setCurrentDate(val, true);
            this.onCurrentDateChanged.emit(this._currentDate);
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.autoSelect) {
            if (this.autoSelect.toString() === 'false') {
                this.autoSelect = false;
            }
            else {
                this.autoSelect = true;
            }
        }
        this.hourSegments = 60 / this.timeInterval;
        this.hourParts = 60 / this.step;
        if (this.hourParts <= this.hourSegments) {
            this.hourParts = 1;
        }
        else {
            this.hourParts = this.hourParts / this.hourSegments;
        }
        this.startHour = parseInt(this.startHour.toString());
        this.endHour = parseInt(this.endHour.toString());
        this.calendarService.queryMode = this.queryMode;
        this.currentDateChangedFromChildrenSubscription = this.calendarService.currentDateChangedFromChildren$.subscribe(function (currentDate) {
            _this._currentDate = currentDate;
            _this.onCurrentDateChanged.emit(currentDate);
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromChildrenSubscription) {
            this.currentDateChangedFromChildrenSubscription.unsubscribe();
            this.currentDateChangedFromChildrenSubscription = null;
        }
    };
    CalendarComponent.prototype.rangeChanged = function (range) {
        this.onRangeChanged.emit(range);
    };
    CalendarComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    CalendarComponent.prototype.timeSelected = function (timeSelected) {
        this.onTimeSelected.emit(timeSelected);
    };
    CalendarComponent.prototype.titleChanged = function (title) {
        this.onTitleChanged.emit(title);
    };
    CalendarComponent.prototype.loadEvents = function () {
        this.calendarService.loadEvents();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Date),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Date])
    ], CalendarComponent.prototype, "currentDate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CalendarComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "calendarMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatDayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatWeekTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatMonthTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "showEventDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startingDayMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startingDayWeek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "noEventsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "queryMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "step", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "timeInterval", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], CalendarComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "monthviewEventDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CalendarComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CalendarComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CalendarComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CalendarComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onCurrentDateChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalendarComponent.prototype, "onTitleChanged", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'calendar',
            template: "\n        <ng-template #monthviewDefaultDisplayEventTemplate let-view=\"view\" let-row=\"row\" let-col=\"col\">\n            {{view.dates[row*7+col].label}}\n        </ng-template>\n        <ng-template #monthviewDefaultEventDetailTemplate let-showEventDetail=\"showEventDetail\" let-selectedDate=\"selectedDate\" let-noEventsLabel=\"noEventsLabel\">\n            <ion-list class=\"event-detail-container\" has-bouncing=\"false\" *ngIf=\"showEventDetail\" overflow-scroll=\"false\">\n                <ion-item *ngFor=\"let event of selectedDate?.events\" (click)=\"eventSelected(event)\">\n                        <span *ngIf=\"!event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{event.startTime|date: 'HH:mm'}}\n                            -\n                            {{event.endTime|date: 'HH:mm'}}\n                        </span>\n                    <span *ngIf=\"event.allDay\" class=\"monthview-eventdetail-timecolumn\">{{allDayLabel}}</span>\n                    <span class=\"event-detail\">  |  {{event.title}}</span>\n                </ion-item>\n                <ion-item *ngIf=\"selectedDate?.events.length==0\">\n                    <div class=\"no-events-label\">{{noEventsLabel}}</div>\n                </ion-item>\n            </ion-list>\n        </ng-template>\n        <ng-template #defaultWeekviewHeaderTemplate let-viewDate=\"viewDate\">\n            {{ viewDate.dayHeader }}\n        </ng-template>\n        <ng-template #defaultAllDayEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultNormalEventTemplate let-displayEvent=\"displayEvent\">\n            <div class=\"calendar-event-inner\">{{displayEvent.event.title}}</div>\n        </ng-template>\n        <ng-template #defaultWeekViewAllDayEventSectionTemplate let-day=\"day\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': day.events}\" *ngIf=\"day.events\"\n                 [ngStyle]=\"{height: 25*day.events.length+'px'}\">\n                <div *ngFor=\"let displayEvent of day.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: 25*displayEvent.position+'px', width: 100*(displayEvent.endIndex-displayEvent.startIndex)+'%', height: '25px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #defaultDayViewAllDayEventSectionTemplate let-allDayEvents=\"allDayEvents\" let-eventTemplate=\"eventTemplate\">\n            <div *ngFor=\"let displayEvent of allDayEvents; let eventIndex=index\"\n                 class=\"calendar-event\" tappable\n                 (click)=\"eventSelected(displayEvent.event)\"\n                 [ngStyle]=\"{top: 25*eventIndex+'px',width: '100%',height:'25px'}\">\n                <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                             [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                </ng-template>\n            </div>\n        </ng-template>\n        <ng-template #defaultNormalEventSectionTemplate let-tm=\"tm\" let-hourParts=\"hourParts\" let-eventTemplate=\"eventTemplate\">\n            <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                <div *ngFor=\"let displayEvent of tm.events\" class=\"calendar-event\" tappable\n                     (click)=\"eventSelected(displayEvent.event)\"\n                     [ngStyle]=\"{top: (37*displayEvent.startOffset/hourParts)+'px',left: 100/displayEvent.overlapNumber*displayEvent.position+'%', width: 100/displayEvent.overlapNumber+'%', height: 37*(displayEvent.endIndex -displayEvent.startIndex - (displayEvent.endOffset + displayEvent.startOffset)/hourParts)+'px'}\">\n                    <ng-template [ngTemplateOutlet]=\"eventTemplate\"\n                                 [ngTemplateOutletContext]=\"{displayEvent:displayEvent}\">\n                    </ng-template>\n                </div>\n            </div>\n        </ng-template>\n\n        <div [ngSwitch]=\"calendarMode\" class=\"{{calendarMode}}view-container\">\n            <monthview *ngSwitchCase=\"'month'\"\n                [formatDay]=\"formatDay\"\n                [formatDayHeader]=\"formatDayHeader\"\n                [formatMonthTitle]=\"formatMonthTitle\"\n                [startingDayMonth]=\"startingDayMonth\"\n                [showEventDetail]=\"showEventDetail\"\n                [noEventsLabel]=\"noEventsLabel\"\n                [autoSelect]=\"autoSelect\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [monthviewDisplayEventTemplate]=\"monthviewDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewInactiveDisplayEventTemplate]=\"monthviewInactiveDisplayEventTemplate||monthviewDefaultDisplayEventTemplate\"\n                [monthviewEventDetailTemplate]=\"monthviewEventDetailTemplate||monthviewDefaultEventDetailTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [spaceBetween]=\"spaceBetween\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </monthview>\n            <weekview *ngSwitchCase=\"'week'\"\n                [formatWeekTitle]=\"formatWeekTitle\"\n                [formatWeekViewDayHeader]=\"formatWeekViewDayHeader\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [startingDayWeek]=\"startingDayWeek\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [autoSelect]=\"autoSelect\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [weekviewHeaderTemplate]=\"weekviewHeaderTemplate||defaultWeekviewHeaderTemplate\"\n                [weekviewAllDayEventTemplate]=\"weekviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [weekviewNormalEventTemplate]=\"weekviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [weekviewAllDayEventSectionTemplate]=\"weekviewAllDayEventSectionTemplate||defaultWeekViewAllDayEventSectionTemplate\"\n                [weekviewNormalEventSectionTemplate]=\"weekviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [spaceBetween]=\"spaceBetween\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </weekview>\n            <dayview *ngSwitchCase=\"'day'\"\n                [formatDayTitle]=\"formatDayTitle\"\n                [formatHourColumn]=\"formatHourColumn\"\n                [allDayLabel]=\"allDayLabel\"\n                [hourParts]=\"hourParts\"\n                [hourSegments]=\"hourSegments\"\n                [eventSource]=\"eventSource\"\n                [markDisabled]=\"markDisabled\"\n                [dayviewAllDayEventTemplate]=\"dayviewAllDayEventTemplate||defaultAllDayEventTemplate\"\n                [dayviewNormalEventTemplate]=\"dayviewNormalEventTemplate||defaultNormalEventTemplate\"\n                [dayviewAllDayEventSectionTemplate]=\"dayviewAllDayEventSectionTemplate||defaultDayViewAllDayEventSectionTemplate\" \n                [dayviewNormalEventSectionTemplate]=\"dayviewNormalEventSectionTemplate||defaultNormalEventSectionTemplate\"\n                [locale]=\"locale\"\n                [dateFormatter]=\"dateFormatter\"\n                [dir]=\"dir\"\n                [scrollToHour]=\"scrollToHour\"\n                [preserveScrollPosition]=\"preserveScrollPosition\"\n                [lockSwipeToPrev]=\"lockSwipeToPrev\"\n                [lockSwipes]=\"lockSwipes\"\n                [startHour]=\"startHour\"\n                [endHour]=\"endHour\"\n                [spaceBetween]=\"spaceBetween\"\n                (onRangeChanged)=\"rangeChanged($event)\"\n                (onEventSelected)=\"eventSelected($event)\"\n                (onTimeSelected)=\"timeSelected($event)\"\n                (onTitleChanged)=\"titleChanged($event)\">\n            </dayview>\n        </div>\n    ",
            styles: ["\n        :host > div { height: 100%; }\n\n        .event-detail-container {\n          border-top: 2px darkgrey solid;\n        }\n\n        .no-events-label {\n          font-weight: bold;\n          color: darkgrey;\n          text-align: center;\n        }\n\n        .event-detail {\n          cursor: pointer;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n        }\n\n        .monthview-eventdetail-timecolumn {\n          width: 110px;\n          overflow: hidden;\n        }\n\n        .calendar-event-inner {\n          overflow: hidden;\n          background-color: #3a87ad;\n          color: white;\n          height: 100%;\n          width: 100%;\n          padding: 2px;\n          line-height: 15px;\n          text-align: initial;\n        }\n\n        @media (max-width: 750px) {\n          .calendar-event-inner {\n            font-size: 12px;\n          }\n        }\n    "],
            providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_2__["CalendarService"], String])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.module.js ***!
  \*********************************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return NgCalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _monthview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monthview */ "./node_modules/ionic2-calendar/monthview.js");
/* harmony import */ var _weekview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekview */ "./node_modules/ionic2-calendar/weekview.js");
/* harmony import */ var _dayview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview */ "./node_modules/ionic2-calendar/dayview.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./init-position-scroll */ "./node_modules/ionic2-calendar/init-position-scroll.js");









var NgCalendarModule = /** @class */ (function () {
    function NgCalendarModule() {
    }
    NgCalendarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _monthview__WEBPACK_IMPORTED_MODULE_4__["MonthViewComponent"], _weekview__WEBPACK_IMPORTED_MODULE_5__["WeekViewComponent"], _dayview__WEBPACK_IMPORTED_MODULE_6__["DayViewComponent"], _calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _init_position_scroll__WEBPACK_IMPORTED_MODULE_8__["initPositionScrollComponent"]
            ],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]],
            entryComponents: [_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]]
        })
    ], NgCalendarModule);
    return NgCalendarModule;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/calendar.service.js":
/*!**********************************************************!*\
  !*** ./node_modules/ionic2-calendar/calendar.service.js ***!
  \**********************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CalendarService = /** @class */ (function () {
    function CalendarService() {
        this.currentDateChangedFromParent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDateChangedFromChildren = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentDateChangedFromParent$ = this.currentDateChangedFromParent.asObservable();
        this.currentDateChangedFromChildren$ = this.currentDateChangedFromChildren.asObservable();
        this.eventSourceChanged$ = this.eventSourceChanged.asObservable();
    }
    CalendarService.prototype.setCurrentDate = function (val, fromParent) {
        if (fromParent === void 0) { fromParent = false; }
        this._currentDate = val;
        if (fromParent) {
            this.currentDateChangedFromParent.next(val);
        }
        else {
            this.currentDateChangedFromChildren.next(val);
        }
    };
    Object.defineProperty(CalendarService.prototype, "currentDate", {
        get: function () {
            return this._currentDate;
        },
        enumerable: true,
        configurable: true
    });
    CalendarService.prototype.rangeChanged = function (component) {
        if (this.queryMode === 'local') {
            if (component.eventSource && component.onDataLoaded) {
                component.onDataLoaded();
            }
        }
        else if (this.queryMode === 'remote') {
            component.onRangeChanged.emit(component.range);
        }
    };
    CalendarService.prototype.getStep = function (mode) {
        switch (mode) {
            case 'month':
                return {
                    years: 0,
                    months: 1,
                    days: 0
                };
            case 'week':
                return {
                    years: 0,
                    months: 0,
                    days: 7
                };
            case 'day':
                return {
                    years: 0,
                    months: 0,
                    days: 1
                };
        }
    };
    CalendarService.prototype.getAdjacentCalendarDate = function (mode, direction) {
        var step = this.getStep(mode);
        var calculateCalendarDate = new Date(this.currentDate.getTime()), year = calculateCalendarDate.getFullYear() + direction * step.years, month = calculateCalendarDate.getMonth() + direction * step.months, date = calculateCalendarDate.getDate() + direction * step.days;
        calculateCalendarDate.setFullYear(year, month, date);
        if (mode === 'month') {
            var firstDayInNextMonth = new Date(year, month + 1, 1);
            if (firstDayInNextMonth.getTime() <= calculateCalendarDate.getTime()) {
                calculateCalendarDate = new Date(firstDayInNextMonth.getTime() - 24 * 60 * 60 * 1000);
            }
        }
        return calculateCalendarDate;
    };
    CalendarService.prototype.getAdjacentViewStartTime = function (component, direction) {
        var adjacentCalendarDate = this.getAdjacentCalendarDate(component.mode, direction);
        return component.getRange(adjacentCalendarDate).startTime;
    };
    CalendarService.prototype.populateAdjacentViews = function (component) {
        var currentViewStartDate, currentViewData, toUpdateViewIndex, currentViewIndex = component.currentViewIndex;
        if (component.direction === 1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
            toUpdateViewIndex = (currentViewIndex + 1) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else if (component.direction === -1) {
            currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
            toUpdateViewIndex = (currentViewIndex + 2) % 3;
            component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
        }
        else {
            if (!component.views) {
                currentViewData = [];
                currentViewStartDate = component.range.startTime;
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                currentViewData.push(component.getViewData(currentViewStartDate));
                component.views = currentViewData;
            }
            else {
                currentViewStartDate = component.range.startTime;
                component.views[currentViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, -1);
                toUpdateViewIndex = (currentViewIndex + 2) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
                currentViewStartDate = this.getAdjacentViewStartTime(component, 1);
                toUpdateViewIndex = (currentViewIndex + 1) % 3;
                component.views[toUpdateViewIndex] = component.getViewData(currentViewStartDate);
            }
        }
    };
    CalendarService.prototype.loadEvents = function () {
        this.eventSourceChanged.next();
    };
    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/dayview.js":
/*!*************************************************!*\
  !*** ./node_modules/ionic2-calendar/dayview.js ***!
  \*************************************************/
/*! exports provided: DayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var DayViewComponent = /** @class */ (function () {
    function DayViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'day';
        this.inited = false;
        this.callbackOnInit = true;
    }
    DayViewComponent_1 = DayViewComponent;
    DayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideOptions = {
            loop: true,
            spaceBetween: this.spaceBetween
        };
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatDayViewTitle) {
            this.formatTitle = this.dateFormatter.formatDayViewTitle;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_1.transform(date, this.formatDayTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatDayViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatDayViewHourColumn;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_2.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    DayViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.dayview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
                me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 0);
        }
    };
    DayViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    DayViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    DayViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var direction = 0, currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    DayViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacentDate);
        this.refreshView();
        this.direction = 0;
    };
    DayViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var rows = [], time, currentHour = startTime.getHours(), currentDate = startTime.getDate(), hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                time = new Date(startTime.getTime());
                time.setHours(currentHour + hour, interval);
                time.setDate(currentDate);
                rows.push({
                    time: time,
                    events: []
                });
            }
        }
        return rows;
    };
    DayViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour].time));
        }
        return hourColumnLabels;
    };
    DayViewComponent.prototype.getViewData = function (startTime) {
        return {
            rows: DayViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            allDayEvents: []
        };
    };
    DayViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), startTime = new Date(year, month, date), endTime = new Date(year, month, date + 1);
        return {
            startTime: startTime,
            endTime: endTime
        };
    };
    DayViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, allDayEvents = this.views[currentViewIndex].allDayEvents = [], oneHour = 3600000, eps = 0.016, normalEventInRange = false, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments;
        for (var hour = 0; hour < this.hourRange; hour += 1) {
            rows[hour].events = [];
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEvents.push({
                        event: event_1
                    });
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                }
                var timeDiff = void 0;
                var timeDifferenceStart = void 0;
                if (eventStartTime <= startTime) {
                    timeDifferenceStart = 0;
                }
                else {
                    timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceStart = timeDiff / oneHour * this.hourSegments;
                }
                var timeDifferenceEnd = void 0;
                if (eventEndTime >= endTime) {
                    timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                }
                else {
                    timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                    timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                }
                var startIndex = Math.floor(timeDifferenceStart);
                var endIndex = Math.ceil(timeDifferenceEnd - eps);
                var startOffset = 0;
                var endOffset = 0;
                if (this.hourParts !== 1) {
                    if (startIndex < rangeStartRowIndex) {
                        startOffset = 0;
                    }
                    else {
                        startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                    }
                    if (endIndex > rangeEndRowIndex) {
                        endOffset = 0;
                    }
                    else {
                        endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                    }
                }
                if (startIndex < rangeStartRowIndex) {
                    startIndex = 0;
                }
                else {
                    startIndex -= rangeStartRowIndex;
                }
                if (endIndex > rangeEndRowIndex) {
                    endIndex = rangeEndRowIndex;
                }
                endIndex -= rangeStartRowIndex;
                if (startIndex < endIndex) {
                    var displayEvent = {
                        event: event_1,
                        startIndex: startIndex,
                        endIndex: endIndex,
                        startOffset: startOffset,
                        endOffset: endOffset
                    };
                    var eventSet = rows[startIndex].events;
                    if (eventSet) {
                        eventSet.push(displayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayEvent);
                        rows[startIndex].events = eventSet;
                    }
                }
            }
        }
        if (normalEventInRange) {
            var orderedEvents = [];
            for (var hour = 0; hour < this.hourRange; hour += 1) {
                if (rows[hour].events) {
                    rows[hour].events.sort(DayViewComponent_1.compareEventByStartOffset);
                    orderedEvents = orderedEvents.concat(rows[hour].events);
                }
            }
            if (orderedEvents.length > 0) {
                this.placeEvents(orderedEvents);
            }
        }
    };
    DayViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.calendarService.rangeChanged(this);
    };
    DayViewComponent.prototype.getTitle = function () {
        var startingDate = new Date(this.range.startTime.getTime());
        startingDate.setHours(12, 0, 0, 0);
        return this.formatTitle(startingDate);
    };
    DayViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    DayViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    DayViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        DayViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    DayViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    DayViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    DayViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, col, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    DayViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex * hourParts + event_2.startOffset;
            while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex * hourParts + event_3.startOffset;
                    while (index < event_3.endIndex * hourParts - event_3.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    DayViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    DayViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    var DayViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('daySlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], DayViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.dayview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], DayViewComponent.prototype, "dayviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "formatDayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "hourParts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DayViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], DayViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DayViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DayViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DayViewComponent.prototype, "hourSegments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DayViewComponent.prototype, "onTitleChanged", void 0);
    DayViewComponent = DayViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'dayview',
            template: "\n        <ion-slides #daySlider [options]=\"slideOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[0].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[0].allDayEvents.length+'px'}\"\n                                    *ngIf=\"0===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[0].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"0!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"0===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"0!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[0].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[1].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[1].allDayEvents.length+'px'}\"\n                                    *ngIf=\"1===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[1].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"1!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"1===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"1!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[1].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <div class=\"dayview-allday-table\">\n                    <div class=\"dayview-allday-label\">{{allDayLabel}}</div>\n                    <div class=\"dayview-allday-content-wrapper scroll-content\">\n                        <table class=\"table table-bordered dayview-allday-content-table\">\n                            <tbody>\n                            <tr>\n                                <td class=\"calendar-cell\" [ngClass]=\"{'calendar-event-wrap':views[2].allDayEvents.length>0}\"\n                                    [ngStyle]=\"{height: 25*views[2].allDayEvents.length+'px'}\"\n                                    *ngIf=\"2===currentViewIndex\">\n                                    <ng-template [ngTemplateOutlet]=\"dayviewAllDayEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{allDayEvents:views[2].allDayEvents,eventTemplate:dayviewAllDayEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                                <td class=\"calendar-cell\" *ngIf=\"2!==currentViewIndex\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <init-position-scroll *ngIf=\"2===currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                <ng-template [ngTemplateOutlet]=\"dayviewNormalEventSectionTemplate\"\n                                             [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:dayviewNormalEventTemplate}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n                <init-position-scroll *ngIf=\"2!==currentViewIndex\" class=\"dayview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                    <table class=\"table table-bordered table-fixed dayview-normal-event-table\">\n                        <tbody>\n                        <tr *ngFor=\"let tm of views[2].rows; let i = index\">\n                            <td class=\"calendar-hour-column text-center\">\n                                {{hourColumnLabels[i]}}\n                            </td>\n                            <td class=\"calendar-cell\">\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </init-position-scroll>\n            </ion-slide>\n        </ion-slides>\n    ",
            styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .slides-container {\n            height: 100%;\n        }\n\n        .slide-container {\n            display: block;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n\n        .dayview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-label {\n            border-right: 1px solid #ddd;\n            float: right;\n        }\n\n        .dayview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .dayview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .dayview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .dayview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .dayview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .dayview-normal-event-container {\n          margin-top: 50px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .dayview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .dayview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .dayview-allday-label {\n            line-height: 20px;\n          }\n\n          .dayview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .dayview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], DayViewComponent);
    return DayViewComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ionic2-calendar/index.js ***!
  \***********************************************/
/*! exports provided: NgCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.module */ "./node_modules/ionic2-calendar/calendar.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgCalendarModule", function() { return _calendar_module__WEBPACK_IMPORTED_MODULE_0__["NgCalendarModule"]; });




/***/ }),

/***/ "./node_modules/ionic2-calendar/init-position-scroll.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic2-calendar/init-position-scroll.js ***!
  \**************************************************************/
/*! exports provided: initPositionScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPositionScrollComponent", function() { return initPositionScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var initPositionScrollComponent = /** @class */ (function () {
    function initPositionScrollComponent(el) {
        this.onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.listenerAttached = false;
        this.element = el;
    }
    initPositionScrollComponent.prototype.ngOnChanges = function (changes) {
        var initPosition = changes['initPosition'];
        if (initPosition && initPosition.currentValue !== undefined && this.scrollContent) {
            this.scrollContent.scrollTop = initPosition.currentValue;
        }
    };
    initPositionScrollComponent.prototype.ngAfterViewInit = function () {
        var scrollContent = this.scrollContent = this.element.nativeElement.querySelector('.scroll-content');
        if (this.initPosition !== undefined) {
            scrollContent.scrollTop = this.initPosition;
        }
        if (this.emitEvent && !this.listenerAttached) {
            var onScroll_1 = this.onScroll;
            this.handler = function () {
                onScroll_1.emit(scrollContent.scrollTop);
            };
            this.listenerAttached = true;
            scrollContent.addEventListener('scroll', this.handler);
        }
    };
    initPositionScrollComponent.prototype.ngOnDestroy = function () {
        if (this.listenerAttached) {
            this.scrollContent.removeEventListener('scroll', this.handler);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], initPositionScrollComponent.prototype, "initPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], initPositionScrollComponent.prototype, "emitEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], initPositionScrollComponent.prototype, "onScroll", void 0);
    initPositionScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'init-position-scroll',
            template: "\n        <div class=\"scroll-content\" style=\"height:100%\">\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: ["\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }        \n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], initPositionScrollComponent);
    return initPositionScrollComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/monthview.js":
/*!***************************************************!*\
  !*** ./node_modules/ionic2-calendar/monthview.js ***!
  \***************************************************/
/*! exports provided: MonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function() { return MonthViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(calendarService) {
        this.calendarService = calendarService;
        this.autoSelect = true;
        this.dir = "";
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.mode = 'month';
        this.direction = 0;
        this.moveOnSelected = false;
        this.inited = false;
        this.callbackOnInit = true;
    }
    MonthViewComponent_1 = MonthViewComponent;
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideOptions = {
            loop: true,
            spaceBetween: this.spaceBetween
        };
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDay) {
            this.formatDayLabel = this.dateFormatter.formatMonthViewDay;
        }
        else {
            var dayLabelDatePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
            this.formatDayLabel = function (date) {
                return dayLabelDatePipe_1.transform(date, this.formatDay);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewDayHeader) {
            this.formatDayHeaderLabel = this.dateFormatter.formatMonthViewDayHeader;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);
            this.formatDayHeaderLabel = function (date) {
                return datePipe_1.transform(date, this.formatDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatMonthViewTitle) {
            this.formatTitle = this.dateFormatter.formatMonthViewTitle;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatMonthTitle);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    MonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    MonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    MonthViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
    };
    MonthViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    MonthViewComponent.prototype.move = function (direction) {
        if (direction === 0)
            return;
        this.direction = direction;
        if (!this.moveOnSelected) {
            var adjacentDate = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
            this.calendarService.setCurrentDate(adjacentDate);
        }
        this.refreshView();
        this.direction = 0;
        this.moveOnSelected = false;
    };
    MonthViewComponent.prototype.createDateObject = function (date) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(date);
        }
        return {
            date: date,
            events: [],
            label: this.formatDayLabel(date),
            secondary: false,
            disabled: disabled
        };
    };
    MonthViewComponent.getDates = function (startDate, n) {
        var dates = new Array(n), current = new Date(startDate.getTime()), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while (i < n) {
            dates[i++] = new Date(current.getTime());
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    MonthViewComponent.prototype.getViewData = function (startTime) {
        var startDate = startTime, date = startDate.getDate(), month = (startDate.getMonth() + (date !== 1 ? 1 : 0)) % 12;
        var dates = MonthViewComponent_1.getDates(startDate, 42);
        var days = [];
        for (var i = 0; i < 42; i++) {
            var dateObject = this.createDateObject(dates[i]);
            dateObject.secondary = dates[i].getMonth() !== month;
            days[i] = dateObject;
        }
        var dayHeaders = [];
        for (var i = 0; i < 7; i++) {
            dayHeaders.push(this.formatDayHeaderLabel(days[i].date));
        }
        return {
            dates: days,
            dayHeaders: dayHeaders
        };
    };
    MonthViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (date.secondary) {
                className = 'monthview-secondary-with-event';
            }
            else {
                className = 'monthview-primary-with-event';
            }
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-current';
        }
        if (date.secondary) {
            if (className) {
                className += ' ';
            }
            className += 'text-muted';
        }
        if (date.disabled) {
            if (className) {
                className += ' ';
            }
            className += 'monthview-disabled';
        }
        return className;
    };
    MonthViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = this.startingDayMonth - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference, startDate = new Date(firstDayOfMonth.getTime());
        if (numDisplayedFromPreviousMonth > 0) {
            startDate.setDate(-numDisplayedFromPreviousMonth + 1);
        }
        var endDate = new Date(startDate.getTime());
        endDate.setDate(endDate.getDate() + 42);
        return {
            startTime: startDate,
            endTime: endDate
        };
    };
    MonthViewComponent.prototype.onDataLoaded = function () {
        var range = this.range, eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = range.startTime, endTime = range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, dates = this.views[currentViewIndex].dates, oneDay = 86400000, eps = 0.0006;
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].hasEvent = false;
                dates[r].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i], eventStartTime = new Date(event_1.startTime.getTime()), eventEndTime = new Date(event_1.endTime.getTime()), st = void 0, et = void 0;
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    st = utcStartTime;
                    et = utcEndTime;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    st = startTime;
                    et = endTime;
                }
            }
            var timeDiff = void 0;
            var timeDifferenceStart = void 0;
            if (eventStartTime <= st) {
                timeDifferenceStart = 0;
            }
            else {
                timeDiff = eventStartTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventStartTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceStart = timeDiff / oneDay;
            }
            var timeDifferenceEnd = void 0;
            if (eventEndTime >= et) {
                timeDiff = et.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (et.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            else {
                timeDiff = eventEndTime.getTime() - st.getTime();
                if (!event_1.allDay) {
                    timeDiff = timeDiff - (eventEndTime.getTimezoneOffset() - st.getTimezoneOffset()) * 60000;
                }
                timeDifferenceEnd = timeDiff / oneDay;
            }
            var index = Math.floor(timeDifferenceStart);
            while (index < timeDifferenceEnd - eps) {
                dates[index].hasEvent = true;
                var eventSet = dates[index].events;
                if (eventSet) {
                    eventSet.push(event_1);
                }
                else {
                    eventSet = [];
                    eventSet.push(event_1);
                    dates[index].events = eventSet;
                }
                index += 1;
            }
        }
        for (var r = 0; r < 42; r += 1) {
            if (dates[r].hasEvent) {
                dates[r].events.sort(this.compareEvent);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            for (var r = 0; r < 42; r += 1) {
                if (dates[r].selected) {
                    this.selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                this.onTimeSelected.emit({
                    selectedTime: this.selectedDate.date,
                    events: this.selectedDate.events,
                    disabled: this.selectedDate.disabled
                });
            }
        }
    };
    ;
    MonthViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    MonthViewComponent.prototype.getTitle = function () {
        var currentViewStartDate = this.range.startTime, date = currentViewStartDate.getDate(), month = (currentViewStartDate.getMonth() + (date !== 1 ? 1 : 0)) % 12, year = currentViewStartDate.getFullYear() + (date !== 1 && month === 0 ? 1 : 0), headerDate = new Date(year, month, 1, 12, 0, 0, 0);
        return this.formatTitle(headerDate);
    };
    MonthViewComponent.prototype.compareEvent = function (event1, event2) {
        if (event1.allDay) {
            return 1;
        }
        else if (event2.allDay) {
            return -1;
        }
        else {
            return (event1.startTime.getTime() - event2.startTime.getTime());
        }
    };
    MonthViewComponent.prototype.select = function (viewDate) {
        if (!this.views)
            return;
        var selectedDate = viewDate.date, events = viewDate.events;
        if (!viewDate.disabled) {
            var dates = this.views[this.currentViewIndex].dates, currentCalendarDate = this.calendarService.currentDate, currentMonth = currentCalendarDate.getMonth(), currentYear = currentCalendarDate.getFullYear(), selectedMonth = selectedDate.getMonth(), selectedYear = selectedDate.getFullYear(), direction = 0;
            if (currentYear === selectedYear) {
                if (currentMonth !== selectedMonth) {
                    direction = currentMonth < selectedMonth ? 1 : -1;
                }
            }
            else {
                direction = currentYear < selectedYear ? 1 : -1;
            }
            this.calendarService.setCurrentDate(selectedDate);
            if (direction === 0) {
                var currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
                for (var r = 0; r < 42; r += 1) {
                    dates[r].selected = false;
                }
                if (selectedDayDifference >= 0 && selectedDayDifference < 42) {
                    dates[selectedDayDifference].selected = true;
                    this.selectedDate = dates[selectedDayDifference];
                }
            }
            else {
                this.moveOnSelected = true;
                this.slideView(direction);
            }
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: events, disabled: viewDate.disabled });
    };
    MonthViewComponent.prototype.slideView = function (direction) {
        if (direction === 1) {
            this.slider.slideNext();
        }
        else if (direction === -1) {
            this.slider.slidePrev();
        }
    };
    MonthViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay), currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        for (var r = 0; r < 42; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 42 && !view.dates[selectedDayDifference].disabled && (this.autoSelect || this.moveOnSelected)) {
            view.dates[selectedDayDifference].selected = true;
            this.selectedDate = view.dates[selectedDayDifference];
        }
        else {
            this.selectedDate = {
                date: null,
                events: [],
                label: null,
                secondary: null,
                disabled: false
            };
        }
        if (currentDayDifference >= 0 && currentDayDifference < 42) {
            view.dates[currentDayDifference].current = true;
        }
    };
    MonthViewComponent.prototype.eventSelected = function (event) {
        this.onEventSelected.emit(event);
    };
    var MonthViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], MonthViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewInactiveDisplayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MonthViewComponent.prototype, "monthviewEventDetailTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatDay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "formatMonthTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MonthViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthViewComponent.prototype, "startingDayMonth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "showEventDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "noEventsLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], MonthViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MonthViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MonthViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MonthViewComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MonthViewComponent.prototype, "onTitleChanged", void 0);
    MonthViewComponent = MonthViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'monthview',
            template: "\n        <div>\n            <ion-slides #monthSlider [options]=\"slideOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\">\n                <ion-slide>\n                    <table *ngIf=\"0===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[0].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[0].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"0!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[0].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[0], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"1===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[1].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[1].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"1!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[1].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[1], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n                <ion-slide>\n                    <table *ngIf=\"2===currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr>\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\" tappable (click)=\"select(views[2].dates[row*7+col])\"\n                                [ngClass]=\"getHighlightClass(views[2].dates[row*7+col])\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <table *ngIf=\"2!==currentViewIndex\" class=\"table table-bordered table-fixed monthview-datetable\">\n                        <thead>\n                        <tr class=\"text-center\">\n                            <th *ngFor=\"let dayHeader of views[2].dayHeaders\">\n                                <small>{{dayHeader}}</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let row of [0,1,2,3,4,5]\">\n                            <td *ngFor=\"let col of [0,1,2,3,4,5,6]\">\n                                <ng-template [ngTemplateOutlet]=\"monthviewInactiveDisplayEventTemplate\"\n                                [ngTemplateOutletContext]=\"{view: views[2], row: row, col: col}\">\n                                </ng-template>\n                            </td>\n                        <tr>\n                        </tbody>\n                    </table>\n                </ion-slide>\n            </ion-slides>\n            <ng-template [ngTemplateOutlet]=\"monthviewEventDetailTemplate\"\n            [ngTemplateOutletContext]=\"{showEventDetail:showEventDetail, selectedDate: selectedDate, noEventsLabel: noEventsLabel}\">\n            </ng-template>\n        </div>\n    ",
            styles: ["\n        .text-muted {\n          color: #999;\n        }\n\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .monthview-primary-with-event {\n          background-color: #3a87ad;\n          color: white;\n        }\n\n        .monthview-current {\n          background-color: #f0f0f0;\n        }\n\n        .monthview-selected {\n          background-color: #009900;\n          color: white;\n        }\n\n        .monthview-datetable td.monthview-disabled {\n            color: lightgrey;\n            cursor: default;\n        }\n\n        .monthview-datetable th {\n          text-align: center;\n        }\n\n        .monthview-datetable td {\n          cursor: pointer;\n          text-align: center;\n        }\n\n        .monthview-secondary-with-event {\n          background-color: #d9edf7;\n        }\n\n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n          display: none;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"]])
    ], MonthViewComponent);
    return MonthViewComponent;
}());



/***/ }),

/***/ "./node_modules/ionic2-calendar/weekview.js":
/*!**************************************************!*\
  !*** ./node_modules/ionic2-calendar/weekview.js ***!
  \**************************************************/
/*! exports provided: WeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function() { return WeekViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ "./node_modules/ionic2-calendar/calendar.service.js");





var WeekViewComponent = /** @class */ (function () {
    function WeekViewComponent(calendarService, elm) {
        this.calendarService = calendarService;
        this.elm = elm;
        this.class = true;
        this.autoSelect = true;
        this.dir = "";
        this.scrollToHour = 0;
        this.onRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onEventSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTimeSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onTitleChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
        this.views = [];
        this.currentViewIndex = 0;
        this.direction = 0;
        this.mode = 'week';
        this.inited = false;
        this.callbackOnInit = true;
    }
    WeekViewComponent_1 = WeekViewComponent;
    WeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideOptions = {
            loop: true,
            spaceBetween: this.spaceBetween
        };
        this.hourRange = (this.endHour - this.startHour) * this.hourSegments;
        if (this.dateFormatter && this.dateFormatter.formatWeekViewDayHeader) {
            this.formatDayHeader = this.dateFormatter.formatWeekViewDayHeader;
        }
        else {
            var datePipe_1 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatDayHeader = function (date) {
                return datePipe_1.transform(date, this.formatWeekViewDayHeader);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewTitle) {
            this.formatTitle = this.dateFormatter.formatWeekViewTitle;
        }
        else {
            var datePipe_2 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatTitle = function (date) {
                return datePipe_2.transform(date, this.formatWeekTitle);
            };
        }
        if (this.dateFormatter && this.dateFormatter.formatWeekViewHourColumn) {
            this.formatHourColumnLabel = this.dateFormatter.formatWeekViewHourColumn;
        }
        else {
            var datePipe_3 = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](this.locale);
            this.formatHourColumnLabel = function (date) {
                return datePipe_3.transform(date, this.formatHourColumn);
            };
        }
        if (this.lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(true);
        }
        if (this.lockSwipes) {
            this.slider.lockSwipes(true);
        }
        this.refreshView();
        this.hourColumnLabels = this.getHourColumnLabels();
        this.inited = true;
        this.currentDateChangedFromParentSubscription = this.calendarService.currentDateChangedFromParent$.subscribe(function (currentDate) {
            _this.refreshView();
        });
        this.eventSourceChangedSubscription = this.calendarService.eventSourceChanged$.subscribe(function () {
            _this.onDataLoaded();
        });
    };
    WeekViewComponent.prototype.ngAfterViewInit = function () {
        var title = this.getTitle();
        this.onTitleChanged.emit(title);
        if (this.scrollToHour > 0) {
            var hourColumns_1 = this.elm.nativeElement.querySelector('.weekview-normal-event-container').querySelectorAll('.calendar-hour-column');
            var me_1 = this;
            setTimeout(function () {
                me_1.initScrollPosition = hourColumns_1[me_1.scrollToHour - me_1.startHour].offsetTop;
            }, 0);
        }
    };
    WeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.inited)
            return;
        var eventSourceChange = changes['eventSource'];
        if (eventSourceChange && eventSourceChange.currentValue) {
            this.onDataLoaded();
        }
        var lockSwipeToPrev = changes['lockSwipeToPrev'];
        if (lockSwipeToPrev) {
            this.slider.lockSwipeToPrev(lockSwipeToPrev.currentValue);
        }
        var lockSwipes = changes['lockSwipes'];
        if (lockSwipes) {
            this.slider.lockSwipes(lockSwipes.currentValue);
        }
    };
    WeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.currentDateChangedFromParentSubscription) {
            this.currentDateChangedFromParentSubscription.unsubscribe();
            this.currentDateChangedFromParentSubscription = null;
        }
        if (this.eventSourceChangedSubscription) {
            this.eventSourceChangedSubscription.unsubscribe();
            this.eventSourceChangedSubscription = null;
        }
    };
    WeekViewComponent.prototype.onSlideChanged = function () {
        var _this = this;
        if (this.callbackOnInit) {
            this.callbackOnInit = false;
            return;
        }
        var currentSlideIndex = this.slider.getActiveIndex(), direction = 0, currentViewIndex = this.currentViewIndex;
        this.slider.getActiveIndex().then(function (currentSlideIndex) {
            currentSlideIndex = (currentSlideIndex + 2) % 3;
            if (currentSlideIndex - currentViewIndex === 1) {
                direction = 1;
            }
            else if (currentSlideIndex === 0 && currentViewIndex === 2) {
                direction = 1;
                _this.slider.slideTo(1, 0, false);
            }
            else if (currentViewIndex - currentSlideIndex === 1) {
                direction = -1;
            }
            else if (currentSlideIndex === 2 && currentViewIndex === 0) {
                direction = -1;
                _this.slider.slideTo(3, 0, false);
            }
            _this.currentViewIndex = currentSlideIndex;
            _this.move(direction);
        });
    };
    WeekViewComponent.prototype.move = function (direction) {
        if (direction === 0) {
            return;
        }
        this.direction = direction;
        var adjacent = this.calendarService.getAdjacentCalendarDate(this.mode, direction);
        this.calendarService.setCurrentDate(adjacent);
        this.refreshView();
        this.direction = 0;
    };
    WeekViewComponent.createDateObjects = function (startTime, startHour, endHour, timeInterval) {
        var times = [], currentHour = startTime.getHours(), currentDate = startTime.getDate(), hourStep, minStep;
        if (timeInterval < 1) {
            hourStep = Math.floor(1 / timeInterval);
            minStep = 60;
        }
        else {
            hourStep = 1;
            minStep = Math.floor(60 / timeInterval);
        }
        for (var hour = startHour; hour < endHour; hour += hourStep) {
            for (var interval = 0; interval < 60; interval += minStep) {
                var row = [];
                for (var day = 0; day < 7; day += 1) {
                    var time = new Date(startTime.getTime());
                    time.setHours(currentHour + hour, interval);
                    time.setDate(currentDate + day);
                    row.push({
                        events: [],
                        time: time
                    });
                }
                times.push(row);
            }
        }
        return times;
    };
    WeekViewComponent.getDates = function (startTime, n) {
        var dates = new Array(n), current = new Date(startTime.getTime()), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while (i < n) {
            dates[i++] = {
                date: new Date(current.getTime()),
                events: [],
                dayHeader: ''
            };
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };
    WeekViewComponent.prototype.getHourColumnLabels = function () {
        var hourColumnLabels = [];
        for (var hour = 0, length_1 = this.views[0].rows.length; hour < length_1; hour += 1) {
            hourColumnLabels.push(this.formatHourColumnLabel(this.views[0].rows[hour][0].time));
        }
        return hourColumnLabels;
    };
    WeekViewComponent.prototype.getViewData = function (startTime) {
        var dates = WeekViewComponent_1.getDates(startTime, 7);
        for (var i = 0; i < 7; i++) {
            dates[i].dayHeader = this.formatDayHeader(dates[i].date);
        }
        return {
            rows: WeekViewComponent_1.createDateObjects(startTime, this.startHour, this.endHour, this.hourSegments),
            dates: dates
        };
    };
    WeekViewComponent.prototype.getRange = function (currentDate) {
        var year = currentDate.getFullYear(), month = currentDate.getMonth(), date = currentDate.getDate(), day = currentDate.getDay(), difference = day - this.startingDayWeek;
        if (difference < 0) {
            difference += 7;
        }
        var firstDayOfWeek = new Date(year, month, date - difference);
        var endTime = new Date(year, month, date - difference + 7);
        return {
            startTime: firstDayOfWeek,
            endTime: endTime
        };
    };
    WeekViewComponent.prototype.onDataLoaded = function () {
        var eventSource = this.eventSource, len = eventSource ? eventSource.length : 0, startTime = this.range.startTime, endTime = this.range.endTime, utcStartTime = new Date(Date.UTC(startTime.getFullYear(), startTime.getMonth(), startTime.getDate())), utcEndTime = new Date(Date.UTC(endTime.getFullYear(), endTime.getMonth(), endTime.getDate())), currentViewIndex = this.currentViewIndex, rows = this.views[currentViewIndex].rows, dates = this.views[currentViewIndex].dates, oneHour = 3600000, oneDay = 86400000, 
        // add allday eps
        eps = 0.016, allDayEventInRange = false, normalEventInRange = false, rangeStartRowIndex = this.startHour * this.hourSegments, rangeEndRowIndex = this.endHour * this.hourSegments, allRows = 24 * this.hourSegments;
        for (var i = 0; i < 7; i += 1) {
            dates[i].events = [];
            dates[i].hasEvent = false;
        }
        for (var day = 0; day < 7; day += 1) {
            for (var hour = 0; hour < this.hourRange; hour += 1) {
                rows[hour][day].events = [];
            }
        }
        for (var i = 0; i < len; i += 1) {
            var event_1 = eventSource[i];
            var eventStartTime = new Date(event_1.startTime.getTime());
            var eventEndTime = new Date(event_1.endTime.getTime());
            if (event_1.allDay) {
                if (eventEndTime <= utcStartTime || eventStartTime >= utcEndTime) {
                    continue;
                }
                else {
                    allDayEventInRange = true;
                    var allDayStartIndex = void 0;
                    if (eventStartTime <= utcStartTime) {
                        allDayStartIndex = 0;
                    }
                    else {
                        allDayStartIndex = Math.floor((eventStartTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var allDayEndIndex = void 0;
                    if (eventEndTime >= utcEndTime) {
                        allDayEndIndex = Math.ceil((utcEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    else {
                        allDayEndIndex = Math.ceil((eventEndTime.getTime() - utcStartTime.getTime()) / oneDay);
                    }
                    var displayAllDayEvent = {
                        event: event_1,
                        startIndex: allDayStartIndex,
                        endIndex: allDayEndIndex
                    };
                    var eventSet = dates[allDayStartIndex].events;
                    if (eventSet) {
                        eventSet.push(displayAllDayEvent);
                    }
                    else {
                        eventSet = [];
                        eventSet.push(displayAllDayEvent);
                        dates[allDayStartIndex].events = eventSet;
                    }
                    dates[allDayStartIndex].hasEvent = true;
                }
            }
            else {
                if (eventEndTime <= startTime || eventStartTime >= endTime) {
                    continue;
                }
                else {
                    normalEventInRange = true;
                    var timeDiff = void 0;
                    var timeDifferenceStart = void 0;
                    if (eventStartTime <= startTime) {
                        timeDifferenceStart = 0;
                    }
                    else {
                        timeDiff = eventStartTime.getTime() - startTime.getTime() - (eventStartTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceStart = timeDiff / oneHour * this.hourSegments;
                    }
                    var timeDifferenceEnd = void 0;
                    if (eventEndTime >= endTime) {
                        timeDiff = endTime.getTime() - startTime.getTime() - (endTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                    }
                    else {
                        timeDiff = eventEndTime.getTime() - startTime.getTime() - (eventEndTime.getTimezoneOffset() - startTime.getTimezoneOffset()) * 60000;
                        timeDifferenceEnd = timeDiff / oneHour * this.hourSegments;
                    }
                    var startIndex = Math.floor(timeDifferenceStart), endIndex = Math.ceil(timeDifferenceEnd - eps), startRowIndex = startIndex % allRows, dayIndex = Math.floor(startIndex / allRows), endOfDay = dayIndex * allRows, startOffset = 0, endOffset = 0;
                    if (this.hourParts !== 1) {
                        if (startRowIndex < rangeStartRowIndex) {
                            startOffset = 0;
                        }
                        else {
                            startOffset = Math.floor((timeDifferenceStart - startIndex) * this.hourParts);
                        }
                    }
                    do {
                        endOfDay += allRows;
                        var endRowIndex = void 0;
                        if (endOfDay < endIndex) {
                            endRowIndex = allRows;
                        }
                        else {
                            if (endOfDay === endIndex) {
                                endRowIndex = allRows;
                            }
                            else {
                                endRowIndex = endIndex % allRows;
                            }
                            if (this.hourParts !== 1) {
                                if (endRowIndex > rangeEndRowIndex) {
                                    endOffset = 0;
                                }
                                else {
                                    endOffset = Math.floor((endIndex - timeDifferenceEnd) * this.hourParts);
                                }
                            }
                        }
                        if (startRowIndex < rangeStartRowIndex) {
                            startRowIndex = 0;
                        }
                        else {
                            startRowIndex -= rangeStartRowIndex;
                        }
                        if (endRowIndex > rangeEndRowIndex) {
                            endRowIndex = rangeEndRowIndex;
                        }
                        endRowIndex -= rangeStartRowIndex;
                        if (startRowIndex < endRowIndex) {
                            var displayEvent = {
                                event: event_1,
                                startIndex: startRowIndex,
                                endIndex: endRowIndex,
                                startOffset: startOffset,
                                endOffset: endOffset
                            };
                            var eventSet = rows[startRowIndex][dayIndex].events;
                            if (eventSet) {
                                eventSet.push(displayEvent);
                            }
                            else {
                                eventSet = [];
                                eventSet.push(displayEvent);
                                rows[startRowIndex][dayIndex].events = eventSet;
                            }
                            dates[dayIndex].hasEvent = true;
                        }
                        startRowIndex = 0;
                        startOffset = 0;
                        dayIndex += 1;
                    } while (endOfDay < endIndex);
                }
            }
        }
        if (normalEventInRange) {
            for (var day = 0; day < 7; day += 1) {
                var orderedEvents = [];
                for (var hour = 0; hour < this.hourRange; hour += 1) {
                    if (rows[hour][day].events) {
                        rows[hour][day].events.sort(WeekViewComponent_1.compareEventByStartOffset);
                        orderedEvents = orderedEvents.concat(rows[hour][day].events);
                    }
                }
                if (orderedEvents.length > 0) {
                    this.placeEvents(orderedEvents);
                }
            }
        }
        if (allDayEventInRange) {
            var orderedAllDayEvents = [];
            for (var day = 0; day < 7; day += 1) {
                if (dates[day].events) {
                    orderedAllDayEvents = orderedAllDayEvents.concat(dates[day].events);
                }
            }
            if (orderedAllDayEvents.length > 0) {
                this.placeAllDayEvents(orderedAllDayEvents);
            }
        }
        if (this.autoSelect) {
            var findSelected = false;
            var selectedDate = void 0;
            for (var r = 0; r < 7; r += 1) {
                if (dates[r].selected) {
                    selectedDate = dates[r];
                    findSelected = true;
                    break;
                }
            }
            if (findSelected) {
                var disabled = false;
                if (this.markDisabled) {
                    disabled = this.markDisabled(selectedDate.date);
                }
                this.onTimeSelected.emit({
                    selectedTime: selectedDate.date,
                    events: selectedDate.events.map(function (e) { return e.event; }),
                    disabled: disabled
                });
            }
        }
    };
    WeekViewComponent.prototype.refreshView = function () {
        this.range = this.getRange(this.calendarService.currentDate);
        if (this.inited) {
            var title = this.getTitle();
            this.onTitleChanged.emit(title);
        }
        this.calendarService.populateAdjacentViews(this);
        this.updateCurrentView(this.range.startTime, this.views[this.currentViewIndex]);
        this.calendarService.rangeChanged(this);
    };
    WeekViewComponent.prototype.getTitle = function () {
        var firstDayOfWeek = new Date(this.range.startTime.getTime());
        firstDayOfWeek.setHours(12, 0, 0, 0);
        return this.formatTitle(firstDayOfWeek);
    };
    WeekViewComponent.prototype.getHighlightClass = function (date) {
        var className = '';
        if (date.hasEvent) {
            if (className) {
                className += ' ';
            }
            className = 'weekview-with-event';
        }
        if (date.selected) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-selected';
        }
        if (date.current) {
            if (className) {
                className += ' ';
            }
            className += 'weekview-current';
        }
        return className;
    };
    WeekViewComponent.compareEventByStartOffset = function (eventA, eventB) {
        return eventA.startOffset - eventB.startOffset;
    };
    WeekViewComponent.prototype.select = function (selectedTime, events) {
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedTime);
        }
        this.onTimeSelected.emit({
            selectedTime: selectedTime,
            events: events.map(function (e) { return e.event; }),
            disabled: disabled
        });
    };
    WeekViewComponent.prototype.placeEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
        WeekViewComponent_1.calculateWidth(orderedEvents, this.hourRange, this.hourParts);
    };
    WeekViewComponent.prototype.placeAllDayEvents = function (orderedEvents) {
        this.calculatePosition(orderedEvents);
    };
    WeekViewComponent.prototype.overlap = function (event1, event2) {
        var earlyEvent = event1, lateEvent = event2;
        if (event1.startIndex > event2.startIndex || (event1.startIndex === event2.startIndex && event1.startOffset > event2.startOffset)) {
            earlyEvent = event2;
            lateEvent = event1;
        }
        if (earlyEvent.endIndex <= lateEvent.startIndex) {
            return false;
        }
        else {
            return !(earlyEvent.endIndex - lateEvent.startIndex === 1 && earlyEvent.endOffset + lateEvent.startOffset >= this.hourParts);
        }
    };
    WeekViewComponent.prototype.calculatePosition = function (events) {
        var len = events.length, maxColumn = 0, isForbidden = new Array(len);
        for (var i = 0; i < len; i += 1) {
            var col = void 0;
            for (col = 0; col < maxColumn; col += 1) {
                isForbidden[col] = false;
            }
            for (var j = 0; j < i; j += 1) {
                if (this.overlap(events[i], events[j])) {
                    isForbidden[events[j].position] = true;
                }
            }
            for (col = 0; col < maxColumn; col += 1) {
                if (!isForbidden[col]) {
                    break;
                }
            }
            if (col < maxColumn) {
                events[i].position = col;
            }
            else {
                events[i].position = maxColumn++;
            }
        }
        if (this.dir === 'rtl') {
            for (var i = 0; i < len; i += 1) {
                events[i].position = maxColumn - 1 - events[i].position;
            }
        }
    };
    WeekViewComponent.calculateWidth = function (orderedEvents, size, hourParts) {
        var totalSize = size * hourParts, cells = new Array(totalSize);
        // sort by position in descending order, the right most columns should be calculated first
        orderedEvents.sort(function (eventA, eventB) {
            return eventB.position - eventA.position;
        });
        for (var i_1 = 0; i_1 < totalSize; i_1 += 1) {
            cells[i_1] = {
                calculated: false,
                events: []
            };
        }
        var len = orderedEvents.length;
        for (var i_2 = 0; i_2 < len; i_2 += 1) {
            var event_2 = orderedEvents[i_2];
            var index = event_2.startIndex * hourParts + event_2.startOffset;
            while (index < event_2.endIndex * hourParts - event_2.endOffset) {
                cells[index].events.push(event_2);
                index += 1;
            }
        }
        var i = 0;
        while (i < len) {
            var event_3 = orderedEvents[i];
            if (!event_3.overlapNumber) {
                var overlapNumber = event_3.position + 1;
                event_3.overlapNumber = overlapNumber;
                var eventQueue = [event_3];
                while ((event_3 = eventQueue.shift())) {
                    var index = event_3.startIndex * hourParts + event_3.startOffset;
                    while (index < event_3.endIndex * hourParts - event_3.endOffset) {
                        if (!cells[index].calculated) {
                            cells[index].calculated = true;
                            if (cells[index].events) {
                                var eventCountInCell = cells[index].events.length;
                                for (var j = 0; j < eventCountInCell; j += 1) {
                                    var currentEventInCell = cells[index].events[j];
                                    if (!currentEventInCell.overlapNumber) {
                                        currentEventInCell.overlapNumber = overlapNumber;
                                        eventQueue.push(currentEventInCell);
                                    }
                                }
                            }
                        }
                        index += 1;
                    }
                }
            }
            i += 1;
        }
    };
    WeekViewComponent.prototype.updateCurrentView = function (currentViewStartDate, view) {
        var currentCalendarDate = this.calendarService.currentDate, today = new Date(), oneDay = 86400000, selectedDayDifference = Math.floor((currentCalendarDate.getTime() - currentViewStartDate.getTime() - (currentCalendarDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay), currentDayDifference = Math.floor((today.getTime() - currentViewStartDate.getTime() - (today.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        for (var r = 0; r < 7; r += 1) {
            view.dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7 && this.autoSelect) {
            view.dates[selectedDayDifference].selected = true;
        }
        if (currentDayDifference >= 0 && currentDayDifference < 7) {
            view.dates[currentDayDifference].current = true;
        }
    };
    WeekViewComponent.prototype.daySelected = function (viewDate) {
        var selectedDate = viewDate.date, dates = this.views[this.currentViewIndex].dates, currentViewStartDate = this.range.startTime, oneDay = 86400000, selectedDayDifference = Math.floor((selectedDate.getTime() - currentViewStartDate.getTime() - (selectedDate.getTimezoneOffset() - currentViewStartDate.getTimezoneOffset()) * 60000) / oneDay);
        this.calendarService.setCurrentDate(selectedDate);
        for (var r = 0; r < 7; r += 1) {
            dates[r].selected = false;
        }
        if (selectedDayDifference >= 0 && selectedDayDifference < 7) {
            dates[selectedDayDifference].selected = true;
        }
        var disabled = false;
        if (this.markDisabled) {
            disabled = this.markDisabled(selectedDate);
        }
        this.onTimeSelected.emit({ selectedTime: selectedDate, events: viewDate.events.map(function (e) { return e.event; }), disabled: disabled });
    };
    WeekViewComponent.prototype.setScrollPosition = function (scrollPosition) {
        this.initScrollPosition = scrollPosition;
    };
    var WeekViewComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('weekSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], WeekViewComponent.prototype, "slider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.weekview'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewHeaderTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewAllDayEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], WeekViewComponent.prototype, "weekviewNormalEventSectionTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatWeekViewDayHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "formatHourColumn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "startingDayWeek", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "allDayLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "hourParts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WeekViewComponent.prototype, "eventSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "autoSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], WeekViewComponent.prototype, "markDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "locale", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "dateFormatter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WeekViewComponent.prototype, "dir", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "scrollToHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "preserveScrollPosition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipeToPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WeekViewComponent.prototype, "lockSwipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "startHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "endHour", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "spaceBetween", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WeekViewComponent.prototype, "hourSegments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onRangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onEventSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onTimeSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeekViewComponent.prototype, "onTitleChanged", void 0);
    WeekViewComponent = WeekViewComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'weekview',
            template: "\n        <ion-slides #weekSlider [options]=\"slideOptions\" [dir]=\"dir\" (ionSlideDidChange)=\"onSlideChanged()\" class=\"slides-container\">\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[0].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"0===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                 [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                    </ng-template>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"0!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[0].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[0].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[1].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"1===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"1!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[1].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[1].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n            <ion-slide class=\"slide-container\">\n                <table class=\"table table-bordered table-fixed weekview-header\">\n                    <thead>\n                    <tr>\n                        <th class=\"calendar-hour-column\"></th>\n                        <th class=\"weekview-header text-center\" *ngFor=\"let date of views[2].dates\"\n                            [ngClass]=\"getHighlightClass(date)\"\n                            (click)=\"daySelected(date)\">\n                            <ng-template [ngTemplateOutlet]=\"weekviewHeaderTemplate\"\n                                [ngTemplateOutletContext]=\"{viewDate:date}\">\n                            </ng-template>\n                        </th>\n                    </tr>\n                    </thead>\n                </table>\n                <div *ngIf=\"2===currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewAllDayEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{day:day, eventTemplate:weekviewAllDayEventTemplate}\">\n                                        </ng-template>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\" [emitEvent]=\"preserveScrollPosition\" (onScroll)=\"setScrollPosition($event)\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\" tappable (click)=\"select(tm.time, tm.events)\">\n                                    <div [ngClass]=\"{'calendar-event-wrap': tm.events}\" *ngIf=\"tm.events\">\n                                        <ng-template [ngTemplateOutlet]=\"weekviewNormalEventSectionTemplate\"\n                                                     [ngTemplateOutletContext]=\"{tm:tm, hourParts: hourParts, eventTemplate:weekviewNormalEventTemplate}\">\n                                        </ng-template>\n                                    </div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n                <div *ngIf=\"2!==currentViewIndex\">\n                    <div class=\"weekview-allday-table\">\n                        <div class=\"weekview-allday-label\">{{allDayLabel}}</div>\n                        <div class=\"weekview-allday-content-wrapper scroll-content\">\n                            <table class=\"table table-fixed weekview-allday-content-table\">\n                                <tbody>\n                                <tr>\n                                    <td *ngFor=\"let day of views[2].dates\" class=\"calendar-cell\">\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <init-position-scroll class=\"weekview-normal-event-container\" [initPosition]=\"initScrollPosition\">\n                        <table class=\"table table-bordered table-fixed weekview-normal-event-table\">\n                            <tbody>\n                            <tr *ngFor=\"let row of views[2].rows; let i = index\">\n                                <td class=\"calendar-hour-column text-center\">\n                                    {{hourColumnLabels[i]}}\n                                </td>\n                                <td *ngFor=\"let tm of row\" class=\"calendar-cell\">\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </init-position-scroll>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    ",
            styles: ["\n        .table-fixed {\n          table-layout: fixed;\n        }\n\n        .table {\n          width: 100%;\n          max-width: 100%;\n          background-color: transparent;\n        }\n\n        .table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td,\n        .table > tbody > tr > td, .table > tfoot > tr > td {\n          padding: 8px;\n          line-height: 20px;\n          vertical-align: top;\n        }\n\n        .table > thead > tr > th {\n          vertical-align: bottom;\n          border-bottom: 2px solid #ddd;\n        }\n\n        .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n          border-top: 0\n        }\n\n        .table > tbody + tbody {\n          border-top: 2px solid #ddd;\n        }\n\n        .table-bordered {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > th,\n        .table-bordered > thead > tr > td, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > td {\n          border: 1px solid #ddd;\n        }\n\n        .table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n          border-bottom-width: 2px;\n        }\n\n        .table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th {\n          background-color: #f9f9f9\n        }\n\n        .calendar-hour-column {\n          width: 50px;\n          white-space: nowrap;\n        }\n\n        .calendar-event-wrap {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .calendar-event {\n          position: absolute;\n          padding: 2px;\n          cursor: pointer;\n          z-index: 10000;\n        }\n\n        .calendar-cell {\n          padding: 0 !important;\n          height: 37px;\n        }\n        \n        .slides-container {\n            height: 100%;\n        }\n        \n        .slide-container {\n            display: block;\n        }\n\n        .weekview-allday-label {\n          float: left;\n          height: 100%;\n          line-height: 50px;\n          text-align: center;\n          width: 50px;\n          border-left: 1px solid #ddd;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-label {\n            float: right;\n            border-right: 1px solid #ddd;\n        }\n\n        .weekview-allday-content-wrapper {\n          margin-left: 50px;\n          overflow: hidden;\n          height: 51px;\n        }\n\n        [dir=\"rtl\"] .weekview-allday-content-wrapper {\n          margin-left: 0;\n          margin-right: 50px;\n        }\n\n        .weekview-allday-content-table {\n          min-height: 50px;\n        }\n\n        .weekview-allday-content-table td {\n          border-left: 1px solid #ddd;\n          border-right: 1px solid #ddd;\n        }\n\n        .weekview-header th {\n          overflow: hidden;\n          white-space: nowrap;\n          font-size: 14px;\n        }\n\n        .weekview-allday-table {\n          height: 50px;\n          position: relative;\n          border-bottom: 1px solid #ddd;\n          font-size: 14px;\n        }\n\n        .weekview-normal-event-container {\n          margin-top: 87px;\n          overflow: hidden;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          position: absolute;\n          font-size: 14px;\n        }\n\n        .scroll-content {\n            overflow-y: auto;\n            overflow-x: hidden;\n        }\n        \n        ::-webkit-scrollbar,\n        *::-webkit-scrollbar {\n            display: none;\n        }\n\n        .table > tbody > tr > td.calendar-hour-column {\n          padding-left: 0;\n          padding-right: 0;\n          vertical-align: middle;\n        }\n\n        @media (max-width: 750px) {\n          .weekview-allday-label, .calendar-hour-column {\n            width: 31px;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            padding-top: 4px;\n          }\n\n          .table > tbody > tr > td.calendar-hour-column {\n            padding-left: 0;\n            padding-right: 0;\n            vertical-align: middle;\n            line-height: 12px;\n          }\n\n          .table > thead > tr > th.weekview-header {\n            padding-left: 0;\n            padding-right: 0;\n            font-size: 12px;\n          }\n\n          .weekview-allday-label {\n            line-height: 20px;\n          }\n\n          .weekview-allday-content-wrapper {\n            margin-left: 31px;\n          }\n\n          [dir=\"rtl\"] .weekview-allday-content-wrapper {\n            margin-left: 0;\n            margin-right: 31px;\n          }\n        }\n    "],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]])
    ], WeekViewComponent);
    return WeekViewComponent;
}());



/***/ }),

/***/ "./src/app/plus/plus.module.ts":
/*!*************************************!*\
  !*** ./src/app/plus/plus.module.ts ***!
  \*************************************/
/*! exports provided: PlusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusPageModule", function() { return PlusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plus.page */ "./src/app/plus/plus.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var routes = [
    {
        path: '',
        component: _plus_page__WEBPACK_IMPORTED_MODULE_6__["PlusPage"]
    }
];
var PlusPageModule = /** @class */ (function () {
    function PlusPageModule() {
    }
    PlusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
            ],
            declarations: [_plus_page__WEBPACK_IMPORTED_MODULE_6__["PlusPage"]]
        })
    ], PlusPageModule);
    return PlusPageModule;
}());



/***/ }),

/***/ "./src/app/plus/plus.page.html":
/*!*************************************!*\
  !*** ./src/app/plus/plus.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n          </ion-buttons>\n\n        <ion-title>Bonus</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<p>Vous êtes actuellement en mode : {{orientation == 'portrait-primary' ? 'portrait' : 'paysage'}} </p>\n\n  <p>Partagez l'application pour sauver des vies !</p>\n  <ion-button expand=\"full\" (click)=\"shareTwitter()\">Partager sur Twitter</ion-button>\n  <ion-button expand=\"full\" (click)=\"shareWhatsApp()\">Partager sur WhatsApp</ion-button>\n\n\n    <p>BONUS : scannez un ramasse-crottes afin de bénéficier d'une réduction</p>\n\n    <ion-button class=\"btncolor\" (click)=\"scan()\">Scanner un ramasse-crottes</ion-button>\n\n    <p *ngIf=\"showPromotion\">Vous avez gagné une promotion !</p>\n    <img *ngIf=\"showPromotion\" src=\"assets/ramasse.png\" alt=\"\" height=\"200px\">\n    <p *ngIf=\"showPromotion\">Utilisez le code : BK78JTVA !</p>\n\n\n    \n  <!-- ////////// -->\n\n\n\n    <p>Jours durant lesquels vous avez signalé une crotte :</p>\n    <ion-row>\n        \n    <!-- Move back one screen of the slides -->\n        <ion-col size=\"6\" text-left>\n            <ion-button fill=\"clear\" (click)=\"back()\">\n                <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n          </ion-col>\n\n        \n    <!-- Move forward one screen of the slides -->\n        <ion-col size=\"6\" text-right>\n            <ion-button fill=\"clear\" (click)=\"next()\">\n                <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n          </ion-col>\n      </ion-row>\n\n    <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\" startHour=\"6\" endHour=\"20\"\n        step=\"30\" startingDayWeek=\"1\">\n      </calendar>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/plus/plus.page.scss":
/*!*************************************!*\
  !*** ./src/app/plus/plus.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.takePhoto {\n      width: 100px;\n      height: 100px;\n      border: 5px solid #582900;\n      border-radius: 50%;\n      background: transparent; }\n.btncolor {\n      --background: var(--ion-color-btn); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGx1cy9wbHVzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9hbGV4aXMvRGVza3RvcC9Jb25pYy9Nb2trYVNpdGUvc3JjL2FwcC9wbHVzL3BsdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QiwyQkFBMkIsRUFBQTtBQUkzQjtFQUNBLHNDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGx1cy9wbHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50YWtlUGhvdG8ge1xuICDCoMKgwqDCoHdpZHRoOiAxMDBweDtcbiAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xuICDCoMKgwqDCoGJvcmRlcjogNXB4IHNvbGlkICM1ODI5MDA7XG4gIMKgwqDCoMKgYm9yZGVyLXJhZGl1czogNTAlO1xuICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5idG5jb2xvciB7XG4gIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTsgfVxuIiwiLnRha2VQaG90byB7XG4gICAgwqDCoMKgwqB3aWR0aDogMTAwcHg7XG4gICAgwqDCoMKgwqBoZWlnaHQ6IDEwMHB4O1xuICAgIMKgwqDCoMKgYm9yZGVyOiA1cHggc29saWQgIzU4MjkwMDtcbiAgICDCoMKgwqDCoGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICDCoMKgwqDCoGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuYnRuY29sb3Ige1xuICAgIMKgwqDCoMKgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuKTtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/plus/plus.page.ts":
/*!***********************************!*\
  !*** ./src/app/plus/plus.page.ts ***!
  \***********************************/
/*! exports provided: PlusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusPage", function() { return PlusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");






var PlusPage = /** @class */ (function () {
    function PlusPage(screenOrientation, alertCtrl, locale, socialSharing) {
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.socialSharing = socialSharing;
        this.text = 'Cette application ShitScan est géniale !';
        this.url = 'https://ShitScan.com';
        this.showPromotion = false;
        this.event = {
            title: '',
            desc: '',
            startTime: '',
            endTime: '',
            allDay: false
        };
        this.minDate = new Date().toISOString();
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    PlusPage.prototype.shareTwitter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Either URL or Image
                this.socialSharing.shareViaTwitter(null, null, this.url).then(function () {
                    // Success
                }).catch(function (e) {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    PlusPage.prototype.shareWhatsApp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // Text + Image or URL works
                this.socialSharing.shareViaWhatsApp(this.text, null, this.url).then(function () {
                    // Success
                }).catch(function (e) {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    PlusPage.prototype.ngOnInit = function () {
        var _this = this;
        this.addEvent1();
        this.addEvent2();
        setInterval(function () {
            console.log('a', _this.orientation);
            _this.orientation = _this.screenOrientation.type;
        }, 1000);
    };
    PlusPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    PlusPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    PlusPage.prototype.resetEvent = function () {
        this.event = {
            title: 'Crotte signalée',
            desc: 'à Paris',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            allDay: false
        };
    };
    // Attention : le code ci-dessous est une véritable poubelle
    PlusPage.prototype.addEvent1 = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date('2019-05-3T12:23:52.056Z'),
            endTime: new Date('2019-05-7T12:23:52.056Z'),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    PlusPage.prototype.addEvent2 = function () {
        var eventCopy = {
            title: this.event.title,
            startTime: new Date('2019-05-12T12:23:52.056Z'),
            endTime: new Date(this.event.endTime),
            allDay: this.event.allDay,
            desc: this.event.desc
        };
        if (eventCopy.allDay) {
            var start = eventCopy.startTime;
            var end = eventCopy.endTime;
            eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
        }
        this.eventSource.push(eventCopy);
        this.myCal.loadEvents();
        this.resetEvent();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"])
    ], PlusPage.prototype, "myCal", void 0);
    PlusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-plus',
            template: __webpack_require__(/*! ./plus.page.html */ "./src/app/plus/plus.page.html"),
            styles: [__webpack_require__(/*! ./plus.page.scss */ "./src/app/plus/plus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], String, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"]])
    ], PlusPage);
    return PlusPage;
}());



/***/ })

}]);
//# sourceMappingURL=plus-plus-module.js.map