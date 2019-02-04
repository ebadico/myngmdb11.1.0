/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
/**
 * @record
 */
export function UploaderOptions() { }
if (false) {
    /** @type {?} */
    UploaderOptions.prototype.concurrency;
    /** @type {?|undefined} */
    UploaderOptions.prototype.allowedContentTypes;
    /** @type {?|undefined} */
    UploaderOptions.prototype.maxUploads;
}
/**
 * @record
 */
export function BlobFile() { }
if (false) {
    /** @type {?} */
    BlobFile.prototype.name;
}
/** @enum {number} */
var UploadStatus = {
    Queue: 0,
    Uploading: 1,
    Done: 2,
    Cancelled: 3,
};
export { UploadStatus };
UploadStatus[UploadStatus.Queue] = 'Queue';
UploadStatus[UploadStatus.Uploading] = 'Uploading';
UploadStatus[UploadStatus.Done] = 'Done';
UploadStatus[UploadStatus.Cancelled] = 'Cancelled';
/**
 * @record
 */
export function UploadProgress() { }
if (false) {
    /** @type {?} */
    UploadProgress.prototype.status;
    /** @type {?|undefined} */
    UploadProgress.prototype.data;
}
/**
 * @record
 */
export function UploadFile() { }
if (false) {
    /** @type {?} */
    UploadFile.prototype.id;
    /** @type {?} */
    UploadFile.prototype.fileIndex;
    /** @type {?} */
    UploadFile.prototype.lastModifiedDate;
    /** @type {?} */
    UploadFile.prototype.name;
    /** @type {?} */
    UploadFile.prototype.size;
    /** @type {?} */
    UploadFile.prototype.type;
    /** @type {?} */
    UploadFile.prototype.form;
    /** @type {?} */
    UploadFile.prototype.progress;
    /** @type {?|undefined} */
    UploadFile.prototype.response;
    /** @type {?|undefined} */
    UploadFile.prototype.responseStatus;
    /** @type {?|undefined} */
    UploadFile.prototype.sub;
    /** @type {?|undefined} */
    UploadFile.prototype.nativeFile;
    /** @type {?|undefined} */
    UploadFile.prototype.responseHeaders;
}
/**
 * @record
 */
export function UploadOutput() { }
if (false) {
    /** @type {?} */
    UploadOutput.prototype.type;
    /** @type {?|undefined} */
    UploadOutput.prototype.file;
    /** @type {?|undefined} */
    UploadOutput.prototype.nativeFile;
}
/**
 * @record
 */
export function UploadInput() { }
if (false) {
    /** @type {?} */
    UploadInput.prototype.type;
    /** @type {?|undefined} */
    UploadInput.prototype.url;
    /** @type {?|undefined} */
    UploadInput.prototype.method;
    /** @type {?|undefined} */
    UploadInput.prototype.id;
    /** @type {?|undefined} */
    UploadInput.prototype.fieldName;
    /** @type {?|undefined} */
    UploadInput.prototype.fileIndex;
    /** @type {?|undefined} */
    UploadInput.prototype.file;
    /** @type {?|undefined} */
    UploadInput.prototype.data;
    /** @type {?|undefined} */
    UploadInput.prototype.headers;
    /** @type {?|undefined} */
    UploadInput.prototype.withCredentials;
}
/**
 * @param {?} bytes
 * @return {?}
 */
export function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    /** @type {?} */
    var k = 1024;
    /** @type {?} */
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    /** @type {?} */
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
var MDBUploaderService = /** @class */ (function () {
    function MDBUploaderService(concurrency, contentTypes, maxUploads) {
        if (concurrency === void 0) { concurrency = Number.POSITIVE_INFINITY; }
        if (contentTypes === void 0) { contentTypes = ['*']; }
        if (maxUploads === void 0) { maxUploads = Number.POSITIVE_INFINITY; }
        var _this = this;
        this.queue = [];
        this.serviceEvents = new EventEmitter();
        this.uploadScheduler = new Subject();
        this.subs = [];
        this.contentTypes = contentTypes;
        this.maxUploads = maxUploads;
        this.uploadScheduler
            .pipe(mergeMap(function (upload) { return _this.startUpload(upload); }, concurrency))
            .subscribe(function (uploadOutput) { return _this.serviceEvents.emit(uploadOutput); });
    }
    /**
     * @param {?} incomingFiles
     * @return {?}
     */
    MDBUploaderService.prototype.handleFiles = /**
     * @param {?} incomingFiles
     * @return {?}
     */
    function (incomingFiles) {
        var _this = this;
        var _a;
        /** @type {?} */
        var allowedIncomingFiles = [].reduce.call(incomingFiles, function (acc, checkFile, i) {
            /** @type {?} */
            var futureQueueLength = acc.length + _this.queue.length + 1;
            if (_this.isContentTypeAllowed(checkFile.type) && futureQueueLength <= _this.maxUploads) {
                acc = acc.concat(checkFile);
            }
            else {
                /** @type {?} */
                var rejectedFile = _this.makeUploadFile(checkFile, i);
                _this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }, []);
        (_a = this.queue).push.apply(_a, tslib_1.__spread([].map.call(allowedIncomingFiles, function (file, i) {
            /** @type {?} */
            var uploadFile = _this.makeUploadFile(file, i);
            _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        })));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    MDBUploaderService.prototype.initInputEvents = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var _this = this;
        return input.subscribe(function (event) {
            switch (event.type) {
                case 'uploadFile':
                    /** @type {?} */
                    var uploadFileIndex = _this.queue.findIndex(function (file) { return file === event.file; });
                    if (uploadFileIndex !== -1 && event.file) {
                        _this.uploadScheduler.next({ file: _this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    /** @type {?} */
                    var files = _this.queue.filter(function (file) { return file.progress.status === UploadStatus.Queue; });
                    files.forEach(function (file) { return _this.uploadScheduler.next({ file: file, event: event }); });
                    break;
                case 'cancel':
                    /** @type {?} */
                    var id_1 = event.id || null;
                    if (!id_1) {
                        return;
                    }
                    /** @type {?} */
                    var index = _this.subs.findIndex(function (sub) { return sub.id === id_1; });
                    if (index !== -1 && _this.subs[index].sub) {
                        _this.subs[index].sub.unsubscribe();
                        /** @type {?} */
                        var fileIndex = _this.queue.findIndex(function (file) { return file.id === id_1; });
                        if (fileIndex !== -1) {
                            _this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: _this.queue[fileIndex] });
                        }
                    }
                    break;
                case 'cancelAll':
                    _this.subs.forEach(function (sub) {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        /** @type {?} */
                        var file = _this.queue.find(function (uploadFile) { return uploadFile.id === sub.id; });
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            _this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    });
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    /** @type {?} */
                    var i = _this.queue.findIndex(function (file) { return file.id === event.id; });
                    if (i !== -1) {
                        /** @type {?} */
                        var file = _this.queue[i];
                        _this.queue.splice(i, 1);
                        _this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (_this.queue.length) {
                        _this.queue = [];
                        _this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        });
    };
    /**
     * @param {?} upload
     * @return {?}
     */
    MDBUploaderService.prototype.startUpload = /**
     * @param {?} upload
     * @return {?}
     */
    function (upload) {
        var _this = this;
        return new Observable(function (observer) {
            /** @type {?} */
            var sub = _this.uploadFile(upload.file, upload.event)
                .subscribe(function (output) {
                observer.next(output);
            }, function (err) {
                observer.error(err);
                observer.complete();
            }, function () {
                observer.complete();
            });
            _this.subs.push({ id: upload.file.id, sub: sub });
        });
    };
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    MDBUploaderService.prototype.uploadFile = /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    function (file, event) {
        var _this = this;
        return new Observable(function (observer) {
            /** @type {?} */
            var url = event.url || '';
            /** @type {?} */
            var method = event.method || 'POST';
            /** @type {?} */
            var data = event.data || {};
            /** @type {?} */
            var headers = event.headers || {};
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            /** @type {?} */
            var time = new Date().getTime();
            /** @type {?} */
            var progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            /** @type {?} */
            var speed = 0;
            /** @type {?} */
            var eta = null;
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    /** @type {?} */
                    var percentage = Math.round((e.loaded * 100) / e.total);
                    /** @type {?} */
                    var diff = new Date().getTime() - time;
                    speed = Math.round(e.loaded / diff * 1000);
                    progressStartTime = (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: humanizeBytes(speed) + "/s",
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta)
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', function (e) {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    /** @type {?} */
                    var speedAverage = Math.round(file.size / (new Date().getTime() - progressStartTime) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: humanizeBytes(speedAverage) + "/s",
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: _this.secondsToHuman(eta || 0)
                        }
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = _this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                /** @type {?} */
                var uploadFile_1 = (/** @type {?} */ (file.nativeFile));
                /** @type {?} */
                var uploadIndex = _this.queue.findIndex(function (outFile) { return outFile.nativeFile === uploadFile_1; });
                if (_this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(data).forEach(function (key) { return file.form.append(key, data[key]); });
                Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
                file.form.append(event.fieldName || 'file', uploadFile_1, uploadFile_1.name);
                _this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(file.form);
            }
            catch (e) {
                observer.complete();
            }
            return function () {
                xhr.abort();
            };
        });
    };
    /**
     * @param {?} sec
     * @return {?}
     */
    MDBUploaderService.prototype.secondsToHuman = /**
     * @param {?} sec
     * @return {?}
     */
    function (sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.generateId = /**
     * @return {?}
     */
    function () {
        return Math.random().toString(36).substring(7);
    };
    /**
     * @param {?} contentTypes
     * @return {?}
     */
    MDBUploaderService.prototype.setContentTypes = /**
     * @param {?} contentTypes
     * @return {?}
     */
    function (contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find(function (type) { return type === '*'; }) !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.allContentTypesAllowed = /**
     * @return {?}
     */
    function () {
        return this.contentTypes.find(function (type) { return type === '*'; }) !== undefined;
    };
    /**
     * @param {?} mimetype
     * @return {?}
     */
    MDBUploaderService.prototype.isContentTypeAllowed = /**
     * @param {?} mimetype
     * @return {?}
     */
    function (mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find(function (type) { return type === mimetype; }) !== undefined;
    };
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    MDBUploaderService.prototype.makeUploadFile = /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    function (file, index) {
        return {
            fileIndex: index,
            id: this.generateId(),
            name: file.name,
            size: file.size,
            type: file.type,
            form: new FormData(),
            progress: {
                status: UploadStatus.Queue,
                data: {
                    percentage: 0,
                    speed: 0,
                    speedHuman: humanizeBytes(0) + "/s",
                    startTime: null,
                    endTime: null,
                    eta: null,
                    etaHuman: null
                }
            },
            lastModifiedDate: file.lastModified,
            sub: undefined,
            nativeFile: file
        };
    };
    /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    MDBUploaderService.prototype.parseResponseHeaders = /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    function (httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders.split('\n')
            .map(function (x) { return x.split(/: */, 2); })
            .filter(function (x) { return x[0]; })
            .reduce(function (ac, x) {
            ac[x[0]] = x[1];
            return ac;
        }, {});
    };
    return MDBUploaderService;
}());
export { MDBUploaderService };
if (false) {
    /** @type {?} */
    MDBUploaderService.prototype.queue;
    /** @type {?} */
    MDBUploaderService.prototype.serviceEvents;
    /** @type {?} */
    MDBUploaderService.prototype.uploadScheduler;
    /** @type {?} */
    MDBUploaderService.prototype.subs;
    /** @type {?} */
    MDBUploaderService.prototype.contentTypes;
    /** @type {?} */
    MDBUploaderService.prototype.maxUploads;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXVwbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9maWxlLWlucHV0L2NsYXNzZXMvbWRiLXVwbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzFDLHFDQUlDOzs7SUFIQyxzQ0FBb0I7O0lBQ3BCLDhDQUErQjs7SUFDL0IscUNBQW9COzs7OztBQUd0Qiw4QkFFQzs7O0lBREMsd0JBQWE7Ozs7SUFJYixRQUFLO0lBQ0wsWUFBUztJQUNULE9BQUk7SUFDSixZQUFTOzs7Ozs7Ozs7O0FBR1gsb0NBV0M7OztJQVZDLGdDQUFxQjs7SUFDckIsOEJBUUU7Ozs7O0FBR0osZ0NBY0M7OztJQWJDLHdCQUFXOztJQUNYLCtCQUFrQjs7SUFDbEIsc0NBQXlCOztJQUN6QiwwQkFBYTs7SUFDYiwwQkFBYTs7SUFDYiwwQkFBYTs7SUFDYiwwQkFBZTs7SUFDZiw4QkFBeUI7O0lBQ3pCLDhCQUFlOztJQUNmLG9DQUF3Qjs7SUFDeEIseUJBQXlCOztJQUN6QixnQ0FBa0I7O0lBQ2xCLHFDQUE0Qzs7Ozs7QUFHOUMsa0NBS0M7OztJQUpDLDRCQUNpRTs7SUFDakUsNEJBQWtCOztJQUNsQixrQ0FBa0I7Ozs7O0FBR3BCLGlDQVdDOzs7SUFWQywyQkFBbUY7O0lBQ25GLDBCQUFhOztJQUNiLDZCQUFnQjs7SUFDaEIseUJBQVk7O0lBQ1osZ0NBQW1COztJQUNuQixnQ0FBbUI7O0lBQ25CLDJCQUFrQjs7SUFDbEIsMkJBQXdDOztJQUN4Qyw4QkFBb0M7O0lBQ3BDLHNDQUEwQjs7Ozs7O0FBRzVCLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBYTtJQUN6QyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDZixPQUFPLFFBQVEsQ0FBQztLQUNqQjs7UUFFSyxDQUFDLEdBQUcsSUFBSTs7UUFDUixLQUFLLEdBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7UUFDekQsQ0FBQyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNELE9BQU8sVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRSxDQUFDO0FBRUQ7SUFRRSw0QkFDRSxXQUE4QyxFQUM5QyxZQUE4QixFQUM5QixVQUE2QztRQUY3Qyw0QkFBQSxFQUFBLGNBQXNCLE1BQU0sQ0FBQyxpQkFBaUI7UUFDOUMsNkJBQUEsRUFBQSxnQkFBMEIsR0FBRyxDQUFDO1FBQzlCLDJCQUFBLEVBQUEsYUFBcUIsTUFBTSxDQUFDLGlCQUFpQjtRQUgvQyxpQkFnQkM7UUFaQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLElBQUksQ0FBQyxlQUFlO2FBQ2pCLElBQUksQ0FDSCxRQUFRLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixFQUFFLFdBQVcsQ0FBQyxDQUMxRDthQUNBLFNBQVMsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Ozs7SUFFRCx3Q0FBVzs7OztJQUFYLFVBQVksYUFBdUI7UUFBbkMsaUJBb0JDOzs7WUFuQk8sb0JBQW9CLEdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBVyxFQUFFLFNBQWUsRUFBRSxDQUFTOztnQkFDbkcsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQzVELElBQUksS0FBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNyRixHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM3QjtpQkFBTTs7b0JBQ0MsWUFBWSxHQUFlLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRU4sQ0FBQSxLQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxJQUFJLDRCQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsSUFBVSxFQUFFLENBQVM7O2dCQUNuRSxVQUFVLEdBQWUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNwRSxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRTtRQUVKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBZ0M7UUFBaEQsaUJBK0RDO1FBOURDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWtCO1lBQ3hDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxZQUFZOzt3QkFDVCxlQUFlLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBbkIsQ0FBbUIsQ0FBQztvQkFDekUsSUFBSSxlQUFlLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTt3QkFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztxQkFDaEY7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLFdBQVc7O3dCQUNSLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLFlBQVksQ0FBQyxLQUFLLEVBQTNDLENBQTJDLENBQUM7b0JBQ3BGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQXZELENBQXVELENBQUMsQ0FBQztvQkFDL0UsTUFBTTtnQkFDUixLQUFLLFFBQVE7O3dCQUNMLElBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLElBQUk7b0JBQzNCLElBQUksQ0FBQyxJQUFFLEVBQUU7d0JBQ1AsT0FBTztxQkFDUjs7d0JBRUssS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFFLEVBQWIsQ0FBYSxDQUFDO29CQUN2RCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTt3QkFDeEMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7OzRCQUU3QixTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUUsRUFBZCxDQUFjLENBQUM7d0JBQzlELElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQzs0QkFDL0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDN0U7cUJBQ0Y7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLFdBQVc7b0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO3dCQUNuQixJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUU7NEJBQ1gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFDdkI7OzRCQUVLLElBQUksR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLFVBQVUsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQzt3QkFDcEUsSUFBSSxJQUFJLEVBQUU7NEJBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQzs0QkFDOUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3lCQUM1RDtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTt3QkFDYixPQUFPO3FCQUNSOzt3QkFFSyxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQXBCLENBQW9CLENBQUM7b0JBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzs0QkFDTixJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3FCQUMxRDtvQkFDRCxNQUFNO2dCQUNSLEtBQUssV0FBVztvQkFDZCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDaEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztxQkFDakQ7b0JBQ0QsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxNQUFnRDtRQUE1RCxpQkFjQztRQWJDLE9BQU8sSUFBSSxVQUFVLENBQUMsVUFBQSxRQUFROztnQkFDdEIsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNuRCxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxFQUFFLFVBQUEsR0FBRztnQkFDSixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxFQUFFO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFSixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELHVDQUFVOzs7OztJQUFWLFVBQVcsSUFBZ0IsRUFBRSxLQUFrQjtRQUEvQyxpQkFxR0M7UUFwR0MsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFBLFFBQVE7O2dCQUN0QixHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFOztnQkFDckIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksTUFBTTs7Z0JBQy9CLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7O2dCQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFOztnQkFFN0IsR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFOztnQkFDMUIsSUFBSSxHQUFXLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFDckMsaUJBQWlCLEdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJOztnQkFDeEYsS0FBSyxHQUFHLENBQUM7O2dCQUNULEdBQUcsR0FBa0IsSUFBSTtZQUU3QixHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFDLENBQWdCO2dCQUN2RCxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTs7d0JBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDOzt3QkFDbkQsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSTtvQkFDeEMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7b0JBQzNDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDakcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztvQkFFOUMsSUFBSSxDQUFDLFFBQVEsR0FBRzt3QkFDZCxNQUFNLEVBQUUsWUFBWSxDQUFDLFNBQVM7d0JBQzlCLElBQUksRUFBRTs0QkFDSixVQUFVLEVBQUUsVUFBVTs0QkFDdEIsS0FBSyxFQUFFLEtBQUs7NEJBQ1osVUFBVSxFQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBSTs0QkFDdkMsU0FBUyxFQUFFLGlCQUFpQjs0QkFDNUIsT0FBTyxFQUFFLElBQUk7NEJBQ2IsR0FBRyxFQUFFLEdBQUc7NEJBQ1IsUUFBUSxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO3lCQUNuQztxQkFDRixDQUFDO29CQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNsRDtZQUNILENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVWLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBUTtnQkFDNUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUgsR0FBRyxDQUFDLGtCQUFrQixHQUFHO2dCQUN2QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssY0FBYyxDQUFDLElBQUksRUFBRTs7d0JBQ3BDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHO3dCQUNkLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSTt3QkFDekIsSUFBSSxFQUFFOzRCQUNKLFVBQVUsRUFBRSxHQUFHOzRCQUNmLEtBQUssRUFBRSxZQUFZOzRCQUNuQixVQUFVLEVBQUssYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFJOzRCQUM5QyxTQUFTLEVBQUUsaUJBQWlCOzRCQUM1QixPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7NEJBQzdCLEdBQUcsRUFBRSxHQUFHOzRCQUNSLFFBQVEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7eUJBQ3hDO3FCQUNGLENBQUM7b0JBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO29CQUVqQyxJQUFJO3dCQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzFDO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztxQkFDOUI7b0JBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztvQkFFOUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBRTVDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7WUFDSCxDQUFDLENBQUM7WUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDNUIsR0FBRyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUUzRCxJQUFJOztvQkFDSSxZQUFVLEdBQUcsbUJBQVUsSUFBSSxDQUFDLFVBQVUsRUFBQTs7b0JBQ3RDLFdBQVcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxVQUFVLEtBQUssWUFBVSxFQUFqQyxDQUFpQyxDQUFDO2dCQUV0RixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsU0FBUyxFQUFFO29CQUN0RSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3JCO2dCQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7Z0JBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO2dCQUU3RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRSxZQUFVLEVBQUUsWUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6RSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JCO1lBRUQsT0FBTztnQkFDTCxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMkNBQWM7Ozs7SUFBZCxVQUFlLEdBQVc7UUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsWUFBc0I7UUFDcEMsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLElBQUksWUFBWSxZQUFZLEtBQUssRUFBRTtZQUN4RSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxJQUFJLEtBQUssR0FBRyxFQUFaLENBQVksQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO2FBQ2xDO1lBQ0QsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxtREFBc0I7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxJQUFJLEtBQUssR0FBRyxFQUFaLENBQVksQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELGlEQUFvQjs7OztJQUFwQixVQUFxQixRQUFnQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxLQUFLLFFBQVEsRUFBakIsQ0FBaUIsQ0FBQyxLQUFLLFNBQVMsQ0FBQztJQUNuRixDQUFDOzs7Ozs7SUFFRCwyQ0FBYzs7Ozs7SUFBZCxVQUFlLElBQVUsRUFBRSxLQUFhO1FBQ3RDLE9BQU87WUFDTCxTQUFTLEVBQUUsS0FBSztZQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxRQUFRLEVBQUU7WUFDcEIsUUFBUSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRSxDQUFDO29CQUNiLEtBQUssRUFBRSxDQUFDO29CQUNSLFVBQVUsRUFBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQUk7b0JBQ25DLFNBQVMsRUFBRSxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLEdBQUcsRUFBRSxJQUFJO29CQUNULFFBQVEsRUFBRSxJQUFJO2lCQUNmO2FBQ0Y7WUFDRCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNuQyxHQUFHLEVBQUUsU0FBUztZQUNkLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxpREFBb0I7Ozs7O0lBQTVCLFVBQTZCLFdBQWdCO1FBQzNDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUMzQixHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzthQUNsQyxNQUFNLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUosQ0FBSSxDQUFDO2FBQ3hCLE1BQU0sQ0FBQyxVQUFDLEVBQU8sRUFBRSxDQUFNO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBN1NELElBNlNDOzs7O0lBNVNDLG1DQUFvQjs7SUFDcEIsMkNBQTBDOztJQUMxQyw2Q0FBbUU7O0lBQ25FLGtDQUEwQzs7SUFDMUMsMENBQXVCOztJQUN2Qix3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICdyeGpzL1N1YnNjcmliZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZGVyT3B0aW9ucyB7XG4gIGNvbmN1cnJlbmN5OiBudW1iZXI7XG4gIGFsbG93ZWRDb250ZW50VHlwZXM/OiBzdHJpbmdbXTtcbiAgbWF4VXBsb2Fkcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbG9iRmlsZSBleHRlbmRzIEJsb2Ige1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFVwbG9hZFN0YXR1cyB7XG4gIFF1ZXVlLFxuICBVcGxvYWRpbmcsXG4gIERvbmUsXG4gIENhbmNlbGxlZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFByb2dyZXNzIHtcbiAgc3RhdHVzOiBVcGxvYWRTdGF0dXM7XG4gIGRhdGE/OiB7XG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xuICAgIHNwZWVkOiBudW1iZXI7XG4gICAgc3BlZWRIdW1hbjogc3RyaW5nO1xuICAgIHN0YXJ0VGltZTogbnVtYmVyIHwgbnVsbDtcbiAgICBlbmRUaW1lOiBudW1iZXIgfCBudWxsO1xuICAgIGV0YTogbnVtYmVyIHwgbnVsbDtcbiAgICBldGFIdW1hbjogc3RyaW5nIHwgbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRGaWxlIHtcbiAgaWQ6IHN0cmluZztcbiAgZmlsZUluZGV4OiBudW1iZXI7XG4gIGxhc3RNb2RpZmllZERhdGU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbiAgZm9ybTogRm9ybURhdGE7XG4gIHByb2dyZXNzOiBVcGxvYWRQcm9ncmVzcztcbiAgcmVzcG9uc2U/OiBhbnk7XG4gIHJlc3BvbnNlU3RhdHVzPzogbnVtYmVyO1xuICBzdWI/OiBTdWJzY3JpcHRpb24gfCBhbnk7XG4gIG5hdGl2ZUZpbGU/OiBGaWxlO1xuICByZXNwb25zZUhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZE91dHB1dCB7XG4gIHR5cGU6ICdhZGRlZFRvUXVldWUnIHwgJ2FsbEFkZGVkVG9RdWV1ZScgfCAndXBsb2FkaW5nJyB8ICdkb25lJyB8ICdzdGFydCcgfCAnY2FuY2VsbGVkJyB8ICdkcmFnT3ZlcidcbiAgICAgIHwgJ2RyYWdPdXQnIHwgJ2Ryb3AnIHwgJ3JlbW92ZWQnIHwgJ3JlbW92ZWRBbGwnIHwgJ3JlamVjdGVkJztcbiAgZmlsZT86IFVwbG9hZEZpbGU7XG4gIG5hdGl2ZUZpbGU/OiBGaWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZElucHV0IHtcbiAgdHlwZTogJ3VwbG9hZEFsbCcgfCAndXBsb2FkRmlsZScgfCAnY2FuY2VsJyB8ICdjYW5jZWxBbGwnIHwgJ3JlbW92ZScgfCAncmVtb3ZlQWxsJztcbiAgdXJsPzogc3RyaW5nO1xuICBtZXRob2Q/OiBzdHJpbmc7XG4gIGlkPzogc3RyaW5nO1xuICBmaWVsZE5hbWU/OiBzdHJpbmc7XG4gIGZpbGVJbmRleD86IG51bWJlcjtcbiAgZmlsZT86IFVwbG9hZEZpbGU7XG4gIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfTtcbiAgaGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodW1hbml6ZUJ5dGVzKGJ5dGVzOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gJzAgQnl0ZSc7XG4gIH1cblxuICBjb25zdCBrID0gMTAyNDtcbiAgY29uc3Qgc2l6ZXM6IHN0cmluZ1tdID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQicsICdQQiddO1xuICBjb25zdCBpOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKGspKTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZCgyKSkgKyAnICcgKyBzaXplc1tpXTtcbn1cblxuZXhwb3J0IGNsYXNzIE1EQlVwbG9hZGVyU2VydmljZSB7XG4gIHF1ZXVlOiBVcGxvYWRGaWxlW107XG4gIHNlcnZpY2VFdmVudHM6IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+O1xuICB1cGxvYWRTY2hlZHVsZXI6IFN1YmplY3Q8eyBmaWxlOiBVcGxvYWRGaWxlLCBldmVudDogVXBsb2FkSW5wdXQgfT47XG4gIHN1YnM6IHsgaWQ6IHN0cmluZywgc3ViOiBTdWJzY3JpcHRpb24gfVtdO1xuICBjb250ZW50VHlwZXM6IHN0cmluZ1tdO1xuICBtYXhVcGxvYWRzOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29uY3VycmVuY3k6IG51bWJlciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICBjb250ZW50VHlwZXM6IHN0cmluZ1tdID0gWycqJ10sXG4gICAgbWF4VXBsb2FkczogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKSB7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMuc2VydmljZUV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PigpO1xuICAgIHRoaXMudXBsb2FkU2NoZWR1bGVyID0gbmV3IFN1YmplY3QoKTtcbiAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IGNvbnRlbnRUeXBlcztcbiAgICB0aGlzLm1heFVwbG9hZHMgPSBtYXhVcGxvYWRzO1xuXG4gICAgdGhpcy51cGxvYWRTY2hlZHVsZXJcbiAgICAgIC5waXBlKFxuICAgICAgICBtZXJnZU1hcCh1cGxvYWQgPT4gdGhpcy5zdGFydFVwbG9hZCh1cGxvYWQpLCBjb25jdXJyZW5jeSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodXBsb2FkT3V0cHV0ID0+IHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHVwbG9hZE91dHB1dCkpO1xuICB9XG5cbiAgaGFuZGxlRmlsZXMoaW5jb21pbmdGaWxlczogRmlsZUxpc3QpOiB2b2lkIHtcbiAgICBjb25zdCBhbGxvd2VkSW5jb21pbmdGaWxlczogRmlsZVtdID0gW10ucmVkdWNlLmNhbGwoaW5jb21pbmdGaWxlcywgKGFjYzogRmlsZVtdLCBjaGVja0ZpbGU6IEZpbGUsIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZnV0dXJlUXVldWVMZW5ndGggPSBhY2MubGVuZ3RoICsgdGhpcy5xdWV1ZS5sZW5ndGggKyAxO1xuICAgICAgaWYgKHRoaXMuaXNDb250ZW50VHlwZUFsbG93ZWQoY2hlY2tGaWxlLnR5cGUpICYmIGZ1dHVyZVF1ZXVlTGVuZ3RoIDw9IHRoaXMubWF4VXBsb2Fkcykge1xuICAgICAgICBhY2MgPSBhY2MuY29uY2F0KGNoZWNrRmlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWplY3RlZEZpbGU6IFVwbG9hZEZpbGUgPSB0aGlzLm1ha2VVcGxvYWRGaWxlKGNoZWNrRmlsZSwgaSk7XG4gICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlamVjdGVkJywgZmlsZTogcmVqZWN0ZWRGaWxlIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcblxuICAgIHRoaXMucXVldWUucHVzaCguLi5bXS5tYXAuY2FsbChhbGxvd2VkSW5jb21pbmdGaWxlcywgKGZpbGU6IEZpbGUsIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgdXBsb2FkRmlsZTogVXBsb2FkRmlsZSA9IHRoaXMubWFrZVVwbG9hZEZpbGUoZmlsZSwgaSk7XG4gICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdhZGRlZFRvUXVldWUnLCBmaWxlOiB1cGxvYWRGaWxlIH0pO1xuICAgICAgcmV0dXJuIHVwbG9hZEZpbGU7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnYWxsQWRkZWRUb1F1ZXVlJyB9KTtcbiAgfVxuXG4gIGluaXRJbnB1dEV2ZW50cyhpbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0Pik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIGlucHV0LnN1YnNjcmliZSgoZXZlbnQ6IFVwbG9hZElucHV0KSA9PiB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndXBsb2FkRmlsZSc6XG4gICAgICAgICAgY29uc3QgdXBsb2FkRmlsZUluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgoZmlsZSA9PiBmaWxlID09PSBldmVudC5maWxlKTtcbiAgICAgICAgICBpZiAodXBsb2FkRmlsZUluZGV4ICE9PSAtMSAmJiBldmVudC5maWxlKSB7XG4gICAgICAgICAgICB0aGlzLnVwbG9hZFNjaGVkdWxlci5uZXh0KHsgZmlsZTogdGhpcy5xdWV1ZVt1cGxvYWRGaWxlSW5kZXhdLCBldmVudDogZXZlbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cGxvYWRBbGwnOlxuICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5xdWV1ZS5maWx0ZXIoZmlsZSA9PiBmaWxlLnByb2dyZXNzLnN0YXR1cyA9PT0gVXBsb2FkU3RhdHVzLlF1ZXVlKTtcbiAgICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4gdGhpcy51cGxvYWRTY2hlZHVsZXIubmV4dCh7IGZpbGU6IGZpbGUsIGV2ZW50OiBldmVudCB9KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgY29uc3QgaWQgPSBldmVudC5pZCB8fCBudWxsO1xuICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3Vicy5maW5kSW5kZXgoc3ViID0+IHN1Yi5pZCA9PT0gaWQpO1xuICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgdGhpcy5zdWJzW2luZGV4XS5zdWIpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic1tpbmRleF0uc3ViLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVJbmRleCA9IHRoaXMucXVldWUuZmluZEluZGV4KGZpbGUgPT4gZmlsZS5pZCA9PT0gaWQpO1xuICAgICAgICAgICAgaWYgKGZpbGVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5xdWV1ZVtmaWxlSW5kZXhdLnByb2dyZXNzLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5DYW5jZWxsZWQ7XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ2NhbmNlbGxlZCcsIGZpbGU6IHRoaXMucXVldWVbZmlsZUluZGV4XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NhbmNlbEFsbCc6XG4gICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHtcbiAgICAgICAgICAgIGlmIChzdWIuc3ViKSB7XG4gICAgICAgICAgICAgIHN1Yi5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMucXVldWUuZmluZCh1cGxvYWRGaWxlID0+IHVwbG9hZEZpbGUuaWQgPT09IHN1Yi5pZCk7XG4gICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICBmaWxlLnByb2dyZXNzLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5DYW5jZWxsZWQ7XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ2NhbmNlbGxlZCcsIGZpbGU6IGZpbGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgaWYgKCFldmVudC5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLnF1ZXVlLmZpbmRJbmRleChmaWxlID0+IGZpbGUuaWQgPT09IGV2ZW50LmlkKTtcbiAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLnF1ZXVlW2ldO1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdyZW1vdmVkJywgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbW92ZUFsbCc6XG4gICAgICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdyZW1vdmVkQWxsJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGFydFVwbG9hZCh1cGxvYWQ6IHsgZmlsZTogVXBsb2FkRmlsZSwgZXZlbnQ6IFVwbG9hZElucHV0IH0pOiBPYnNlcnZhYmxlPFVwbG9hZE91dHB1dD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCBzdWIgPSB0aGlzLnVwbG9hZEZpbGUodXBsb2FkLmZpbGUsIHVwbG9hZC5ldmVudClcbiAgICAgICAgLnN1YnNjcmliZShvdXRwdXQgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQob3V0cHV0KTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnIpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5zdWJzLnB1c2goeyBpZDogdXBsb2FkLmZpbGUuaWQsIHN1Yjogc3ViIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBsb2FkRmlsZShmaWxlOiBVcGxvYWRGaWxlLCBldmVudDogVXBsb2FkSW5wdXQpOiBPYnNlcnZhYmxlPFVwbG9hZE91dHB1dD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBldmVudC51cmwgfHwgJyc7XG4gICAgICBjb25zdCBtZXRob2QgPSBldmVudC5tZXRob2QgfHwgJ1BPU1QnO1xuICAgICAgY29uc3QgZGF0YSA9IGV2ZW50LmRhdGEgfHwge307XG4gICAgICBjb25zdCBoZWFkZXJzID0gZXZlbnQuaGVhZGVycyB8fCB7fTtcblxuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICBjb25zdCB0aW1lOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCBwcm9ncmVzc1N0YXJ0VGltZTogbnVtYmVyID0gKGZpbGUucHJvZ3Jlc3MuZGF0YSAmJiBmaWxlLnByb2dyZXNzLmRhdGEuc3RhcnRUaW1lKSB8fCB0aW1lO1xuICAgICAgbGV0IHNwZWVkID0gMDtcbiAgICAgIGxldCBldGE6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGU6IFByb2dyZXNzRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKChlLmxvYWRlZCAqIDEwMCkgLyBlLnRvdGFsKTtcbiAgICAgICAgICBjb25zdCBkaWZmID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aW1lO1xuICAgICAgICAgIHNwZWVkID0gTWF0aC5yb3VuZChlLmxvYWRlZCAvIGRpZmYgKiAxMDAwKTtcbiAgICAgICAgICBwcm9ncmVzc1N0YXJ0VGltZSA9IChmaWxlLnByb2dyZXNzLmRhdGEgJiYgZmlsZS5wcm9ncmVzcy5kYXRhLnN0YXJ0VGltZSkgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgZXRhID0gTWF0aC5jZWlsKChlLnRvdGFsIC0gZS5sb2FkZWQpIC8gc3BlZWQpO1xuXG4gICAgICAgICAgZmlsZS5wcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHN0YXR1czogVXBsb2FkU3RhdHVzLlVwbG9hZGluZyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcGVyY2VudGFnZTogcGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgc3BlZWQ6IHNwZWVkLFxuICAgICAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKHNwZWVkKX0vc2AsXG4gICAgICAgICAgICAgIHN0YXJ0VGltZTogcHJvZ3Jlc3NTdGFydFRpbWUsXG4gICAgICAgICAgICAgIGVuZFRpbWU6IG51bGwsXG4gICAgICAgICAgICAgIGV0YTogZXRhLFxuICAgICAgICAgICAgICBldGFIdW1hbjogdGhpcy5zZWNvbmRzVG9IdW1hbihldGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIG9ic2VydmVyLm5leHQoeyB0eXBlOiAndXBsb2FkaW5nJywgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgIGNvbnN0IHNwZWVkQXZlcmFnZSA9IE1hdGgucm91bmQoZmlsZS5zaXplIC8gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcHJvZ3Jlc3NTdGFydFRpbWUpICogMTAwMCk7XG4gICAgICAgICAgZmlsZS5wcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHN0YXR1czogVXBsb2FkU3RhdHVzLkRvbmUsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMCxcbiAgICAgICAgICAgICAgc3BlZWQ6IHNwZWVkQXZlcmFnZSxcbiAgICAgICAgICAgICAgc3BlZWRIdW1hbjogYCR7aHVtYW5pemVCeXRlcyhzcGVlZEF2ZXJhZ2UpfS9zYCxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBwcm9ncmVzc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgIGV0YTogZXRhLFxuICAgICAgICAgICAgICBldGFIdW1hbjogdGhpcy5zZWNvbmRzVG9IdW1hbihldGEgfHwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZmlsZS5yZXNwb25zZVN0YXR1cyA9IHhoci5zdGF0dXM7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZmlsZS5yZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBmaWxlLnJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbGUucmVzcG9uc2VIZWFkZXJzID0gdGhpcy5wYXJzZVJlc3BvbnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHR5cGU6ICdkb25lJywgZmlsZTogZmlsZSB9KTtcblxuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBldmVudC53aXRoQ3JlZGVudGlhbHMgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVwbG9hZEZpbGUgPSA8QmxvYkZpbGU+ZmlsZS5uYXRpdmVGaWxlO1xuICAgICAgICBjb25zdCB1cGxvYWRJbmRleCA9IHRoaXMucXVldWUuZmluZEluZGV4KG91dEZpbGUgPT4gb3V0RmlsZS5uYXRpdmVGaWxlID09PSB1cGxvYWRGaWxlKTtcblxuICAgICAgICBpZiAodGhpcy5xdWV1ZVt1cGxvYWRJbmRleF0ucHJvZ3Jlc3Muc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IGZpbGUuZm9ybS5hcHBlbmQoa2V5LCBkYXRhW2tleV0pKTtcbiAgICAgICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChrZXkgPT4geGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pKTtcblxuICAgICAgICBmaWxlLmZvcm0uYXBwZW5kKGV2ZW50LmZpZWxkTmFtZSB8fCAnZmlsZScsIHVwbG9hZEZpbGUsIHVwbG9hZEZpbGUubmFtZSk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnc3RhcnQnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICB4aHIuc2VuZChmaWxlLmZvcm0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBzZWNvbmRzVG9IdW1hbihzZWM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNlYyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcbiAgfVxuXG4gIGdlbmVyYXRlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuICB9XG5cbiAgc2V0Q29udGVudFR5cGVzKGNvbnRlbnRUeXBlczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnRUeXBlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGVudFR5cGVzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIGlmIChjb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSAnKicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZXMgPSBbJyonXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGVudFR5cGVzID0gY29udGVudFR5cGVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IFsnKiddO1xuICB9XG5cbiAgYWxsQ29udGVudFR5cGVzQWxsb3dlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSAnKicpICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBpc0NvbnRlbnRUeXBlQWxsb3dlZChtaW1ldHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuYWxsQ29udGVudFR5cGVzQWxsb3dlZCgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFR5cGVzLmZpbmQoKHR5cGU6IHN0cmluZykgPT4gdHlwZSA9PT0gbWltZXR5cGUpICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBtYWtlVXBsb2FkRmlsZShmaWxlOiBGaWxlLCBpbmRleDogbnVtYmVyKTogVXBsb2FkRmlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbGVJbmRleDogaW5kZXgsXG4gICAgICBpZDogdGhpcy5nZW5lcmF0ZUlkKCksXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICBmb3JtOiBuZXcgRm9ybURhdGEoKSxcbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHN0YXR1czogVXBsb2FkU3RhdHVzLlF1ZXVlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcGVyY2VudGFnZTogMCxcbiAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKDApfS9zYCxcbiAgICAgICAgICBzdGFydFRpbWU6IG51bGwsXG4gICAgICAgICAgZW5kVGltZTogbnVsbCxcbiAgICAgICAgICBldGE6IG51bGwsXG4gICAgICAgICAgZXRhSHVtYW46IG51bGxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgc3ViOiB1bmRlZmluZWQsXG4gICAgICBuYXRpdmVGaWxlOiBmaWxlXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VSZXNwb25zZUhlYWRlcnMoaHR0cEhlYWRlcnM6IGFueSkge1xuICAgIGlmICghaHR0cEhlYWRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGh0dHBIZWFkZXJzLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcCgoeDogYW55KSA9PiB4LnNwbGl0KC86ICovLCAyKSlcbiAgICAgIC5maWx0ZXIoKHg6IGFueSkgPT4geFswXSlcbiAgICAgIC5yZWR1Y2UoKGFjOiBhbnksIHg6IGFueSkgPT4ge1xuICAgICAgICBhY1t4WzBdXSA9IHhbMV07XG4gICAgICAgIHJldHVybiBhYztcbiAgICAgIH0sIHt9KTtcbiAgfVxufVxuIl19