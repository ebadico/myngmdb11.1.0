/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
const UploadStatus = {
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
    const k = 1024;
    /** @type {?} */
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    /** @type {?} */
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
export class MDBUploaderService {
    /**
     * @param {?=} concurrency
     * @param {?=} contentTypes
     * @param {?=} maxUploads
     */
    constructor(concurrency = Number.POSITIVE_INFINITY, contentTypes = ['*'], maxUploads = Number.POSITIVE_INFINITY) {
        this.queue = [];
        this.serviceEvents = new EventEmitter();
        this.uploadScheduler = new Subject();
        this.subs = [];
        this.contentTypes = contentTypes;
        this.maxUploads = maxUploads;
        this.uploadScheduler
            .pipe(mergeMap(upload => this.startUpload(upload), concurrency))
            .subscribe(uploadOutput => this.serviceEvents.emit(uploadOutput));
    }
    /**
     * @param {?} incomingFiles
     * @return {?}
     */
    handleFiles(incomingFiles) {
        /** @type {?} */
        const allowedIncomingFiles = [].reduce.call(incomingFiles, (acc, checkFile, i) => {
            /** @type {?} */
            const futureQueueLength = acc.length + this.queue.length + 1;
            if (this.isContentTypeAllowed(checkFile.type) && futureQueueLength <= this.maxUploads) {
                acc = acc.concat(checkFile);
            }
            else {
                /** @type {?} */
                const rejectedFile = this.makeUploadFile(checkFile, i);
                this.serviceEvents.emit({ type: 'rejected', file: rejectedFile });
            }
            return acc;
        }, []);
        this.queue.push(...[].map.call(allowedIncomingFiles, (file, i) => {
            /** @type {?} */
            const uploadFile = this.makeUploadFile(file, i);
            this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        }));
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    }
    /**
     * @param {?} input
     * @return {?}
     */
    initInputEvents(input) {
        return input.subscribe((event) => {
            switch (event.type) {
                case 'uploadFile':
                    /** @type {?} */
                    const uploadFileIndex = this.queue.findIndex(file => file === event.file);
                    if (uploadFileIndex !== -1 && event.file) {
                        this.uploadScheduler.next({ file: this.queue[uploadFileIndex], event: event });
                    }
                    break;
                case 'uploadAll':
                    /** @type {?} */
                    const files = this.queue.filter(file => file.progress.status === UploadStatus.Queue);
                    files.forEach(file => this.uploadScheduler.next({ file: file, event: event }));
                    break;
                case 'cancel':
                    /** @type {?} */
                    const id = event.id || null;
                    if (!id) {
                        return;
                    }
                    /** @type {?} */
                    const index = this.subs.findIndex(sub => sub.id === id);
                    if (index !== -1 && this.subs[index].sub) {
                        this.subs[index].sub.unsubscribe();
                        /** @type {?} */
                        const fileIndex = this.queue.findIndex(file => file.id === id);
                        if (fileIndex !== -1) {
                            this.queue[fileIndex].progress.status = UploadStatus.Cancelled;
                            this.serviceEvents.emit({ type: 'cancelled', file: this.queue[fileIndex] });
                        }
                    }
                    break;
                case 'cancelAll':
                    this.subs.forEach(sub => {
                        if (sub.sub) {
                            sub.sub.unsubscribe();
                        }
                        /** @type {?} */
                        const file = this.queue.find(uploadFile => uploadFile.id === sub.id);
                        if (file) {
                            file.progress.status = UploadStatus.Cancelled;
                            this.serviceEvents.emit({ type: 'cancelled', file: file });
                        }
                    });
                    break;
                case 'remove':
                    if (!event.id) {
                        return;
                    }
                    /** @type {?} */
                    const i = this.queue.findIndex(file => file.id === event.id);
                    if (i !== -1) {
                        /** @type {?} */
                        const file = this.queue[i];
                        this.queue.splice(i, 1);
                        this.serviceEvents.emit({ type: 'removed', file: file });
                    }
                    break;
                case 'removeAll':
                    if (this.queue.length) {
                        this.queue = [];
                        this.serviceEvents.emit({ type: 'removedAll' });
                    }
                    break;
            }
        });
    }
    /**
     * @param {?} upload
     * @return {?}
     */
    startUpload(upload) {
        return new Observable(observer => {
            /** @type {?} */
            const sub = this.uploadFile(upload.file, upload.event)
                .subscribe(output => {
                observer.next(output);
            }, err => {
                observer.error(err);
                observer.complete();
            }, () => {
                observer.complete();
            });
            this.subs.push({ id: upload.file.id, sub: sub });
        });
    }
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    uploadFile(file, event) {
        return new Observable(observer => {
            /** @type {?} */
            const url = event.url || '';
            /** @type {?} */
            const method = event.method || 'POST';
            /** @type {?} */
            const data = event.data || {};
            /** @type {?} */
            const headers = event.headers || {};
            /** @type {?} */
            const xhr = new XMLHttpRequest();
            /** @type {?} */
            const time = new Date().getTime();
            /** @type {?} */
            let progressStartTime = (file.progress.data && file.progress.data.startTime) || time;
            /** @type {?} */
            let speed = 0;
            /** @type {?} */
            let eta = null;
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    /** @type {?} */
                    const percentage = Math.round((e.loaded * 100) / e.total);
                    /** @type {?} */
                    const diff = new Date().getTime() - time;
                    speed = Math.round(e.loaded / diff * 1000);
                    progressStartTime = (file.progress.data && file.progress.data.startTime) || new Date().getTime();
                    eta = Math.ceil((e.total - e.loaded) / speed);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: `${humanizeBytes(speed)}/s`,
                            startTime: progressStartTime,
                            endTime: null,
                            eta: eta,
                            etaHuman: this.secondsToHuman(eta)
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', (e) => {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    /** @type {?} */
                    const speedAverage = Math.round(file.size / (new Date().getTime() - progressStartTime) * 1000);
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: speedAverage,
                            speedHuman: `${humanizeBytes(speedAverage)}/s`,
                            startTime: progressStartTime,
                            endTime: new Date().getTime(),
                            eta: eta,
                            etaHuman: this.secondsToHuman(eta || 0)
                        }
                    };
                    file.responseStatus = xhr.status;
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        file.response = xhr.response;
                    }
                    file.responseHeaders = this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            xhr.withCredentials = event.withCredentials ? true : false;
            try {
                /** @type {?} */
                const uploadFile = (/** @type {?} */ (file.nativeFile));
                /** @type {?} */
                const uploadIndex = this.queue.findIndex(outFile => outFile.nativeFile === uploadFile);
                if (this.queue[uploadIndex].progress.status === UploadStatus.Cancelled) {
                    observer.complete();
                }
                Object.keys(data).forEach(key => file.form.append(key, data[key]));
                Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
                file.form.append(event.fieldName || 'file', uploadFile, uploadFile.name);
                this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(file.form);
            }
            catch (e) {
                observer.complete();
            }
            return () => {
                xhr.abort();
            };
        });
    }
    /**
     * @param {?} sec
     * @return {?}
     */
    secondsToHuman(sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    }
    /**
     * @return {?}
     */
    generateId() {
        return Math.random().toString(36).substring(7);
    }
    /**
     * @param {?} contentTypes
     * @return {?}
     */
    setContentTypes(contentTypes) {
        if (typeof contentTypes !== 'undefined' && contentTypes instanceof Array) {
            if (contentTypes.find((type) => type === '*') !== undefined) {
                this.contentTypes = ['*'];
            }
            else {
                this.contentTypes = contentTypes;
            }
            return;
        }
        this.contentTypes = ['*'];
    }
    /**
     * @return {?}
     */
    allContentTypesAllowed() {
        return this.contentTypes.find((type) => type === '*') !== undefined;
    }
    /**
     * @param {?} mimetype
     * @return {?}
     */
    isContentTypeAllowed(mimetype) {
        if (this.allContentTypesAllowed()) {
            return true;
        }
        return this.contentTypes.find((type) => type === mimetype) !== undefined;
    }
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    makeUploadFile(file, index) {
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
                    speedHuman: `${humanizeBytes(0)}/s`,
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
    }
    /**
     * @private
     * @param {?} httpHeaders
     * @return {?}
     */
    parseResponseHeaders(httpHeaders) {
        if (!httpHeaders) {
            return;
        }
        return httpHeaders.split('\n')
            .map((x) => x.split(/: */, 2))
            .filter((x) => x[0])
            .reduce((ac, x) => {
            ac[x[0]] = x[1];
            return ac;
        }, {});
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXVwbG9hZGVyLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9maWxlLWlucHV0L2NsYXNzZXMvbWRiLXVwbG9hZGVyLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHMUMscUNBSUM7OztJQUhDLHNDQUFvQjs7SUFDcEIsOENBQStCOztJQUMvQixxQ0FBb0I7Ozs7O0FBR3RCLDhCQUVDOzs7SUFEQyx3QkFBYTs7OztJQUliLFFBQUs7SUFDTCxZQUFTO0lBQ1QsT0FBSTtJQUNKLFlBQVM7Ozs7Ozs7Ozs7QUFHWCxvQ0FXQzs7O0lBVkMsZ0NBQXFCOztJQUNyQiw4QkFRRTs7Ozs7QUFHSixnQ0FjQzs7O0lBYkMsd0JBQVc7O0lBQ1gsK0JBQWtCOztJQUNsQixzQ0FBeUI7O0lBQ3pCLDBCQUFhOztJQUNiLDBCQUFhOztJQUNiLDBCQUFhOztJQUNiLDBCQUFlOztJQUNmLDhCQUF5Qjs7SUFDekIsOEJBQWU7O0lBQ2Ysb0NBQXdCOztJQUN4Qix5QkFBeUI7O0lBQ3pCLGdDQUFrQjs7SUFDbEIscUNBQTRDOzs7OztBQUc5QyxrQ0FLQzs7O0lBSkMsNEJBQ2lFOztJQUNqRSw0QkFBa0I7O0lBQ2xCLGtDQUFrQjs7Ozs7QUFHcEIsaUNBV0M7OztJQVZDLDJCQUFtRjs7SUFDbkYsMEJBQWE7O0lBQ2IsNkJBQWdCOztJQUNoQix5QkFBWTs7SUFDWixnQ0FBbUI7O0lBQ25CLGdDQUFtQjs7SUFDbkIsMkJBQWtCOztJQUNsQiwyQkFBd0M7O0lBQ3hDLDhCQUFvQzs7SUFDcEMsc0NBQTBCOzs7Ozs7QUFHNUIsTUFBTSxV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YXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuLy8gaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMvU3Vic2NyaWJlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkZXJPcHRpb25zIHtcbiAgY29uY3VycmVuY3k6IG51bWJlcjtcbiAgYWxsb3dlZENvbnRlbnRUeXBlcz86IHN0cmluZ1tdO1xuICBtYXhVcGxvYWRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2JGaWxlIGV4dGVuZHMgQmxvYiB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gVXBsb2FkU3RhdHVzIHtcbiAgUXVldWUsXG4gIFVwbG9hZGluZyxcbiAgRG9uZSxcbiAgQ2FuY2VsbGVkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkUHJvZ3Jlc3Mge1xuICBzdGF0dXM6IFVwbG9hZFN0YXR1cztcbiAgZGF0YT86IHtcbiAgICBwZXJjZW50YWdlOiBudW1iZXI7XG4gICAgc3BlZWQ6IG51bWJlcjtcbiAgICBzcGVlZEh1bWFuOiBzdHJpbmc7XG4gICAgc3RhcnRUaW1lOiBudW1iZXIgfCBudWxsO1xuICAgIGVuZFRpbWU6IG51bWJlciB8IG51bGw7XG4gICAgZXRhOiBudW1iZXIgfCBudWxsO1xuICAgIGV0YUh1bWFuOiBzdHJpbmcgfCBudWxsO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEZpbGUge1xuICBpZDogc3RyaW5nO1xuICBmaWxlSW5kZXg6IG51bWJlcjtcbiAgbGFzdE1vZGlmaWVkRGF0ZTogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpemU6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xuICBmb3JtOiBGb3JtRGF0YTtcbiAgcHJvZ3Jlc3M6IFVwbG9hZFByb2dyZXNzO1xuICByZXNwb25zZT86IGFueTtcbiAgcmVzcG9uc2VTdGF0dXM/OiBudW1iZXI7XG4gIHN1Yj86IFN1YnNjcmlwdGlvbiB8IGFueTtcbiAgbmF0aXZlRmlsZT86IEZpbGU7XG4gIHJlc3BvbnNlSGVhZGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkT3V0cHV0IHtcbiAgdHlwZTogJ2FkZGVkVG9RdWV1ZScgfCAnYWxsQWRkZWRUb1F1ZXVlJyB8ICd1cGxvYWRpbmcnIHwgJ2RvbmUnIHwgJ3N0YXJ0JyB8ICdjYW5jZWxsZWQnIHwgJ2RyYWdPdmVyJ1xuICAgICAgfCAnZHJhZ091dCcgfCAnZHJvcCcgfCAncmVtb3ZlZCcgfCAncmVtb3ZlZEFsbCcgfCAncmVqZWN0ZWQnO1xuICBmaWxlPzogVXBsb2FkRmlsZTtcbiAgbmF0aXZlRmlsZT86IEZpbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkSW5wdXQge1xuICB0eXBlOiAndXBsb2FkQWxsJyB8ICd1cGxvYWRGaWxlJyB8ICdjYW5jZWwnIHwgJ2NhbmNlbEFsbCcgfCAncmVtb3ZlJyB8ICdyZW1vdmVBbGwnO1xuICB1cmw/OiBzdHJpbmc7XG4gIG1ldGhvZD86IHN0cmluZztcbiAgaWQ/OiBzdHJpbmc7XG4gIGZpZWxkTmFtZT86IHN0cmluZztcbiAgZmlsZUluZGV4PzogbnVtYmVyO1xuICBmaWxlPzogVXBsb2FkRmlsZTtcbiAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgQmxvYiB9O1xuICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuaXplQnl0ZXMoYnl0ZXM6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChieXRlcyA9PT0gMCkge1xuICAgIHJldHVybiAnMCBCeXRlJztcbiAgfVxuXG4gIGNvbnN0IGsgPSAxMDI0O1xuICBjb25zdCBzaXplczogc3RyaW5nW10gPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJ107XG4gIGNvbnN0IGk6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKDIpKSArICcgJyArIHNpemVzW2ldO1xufVxuXG5leHBvcnQgY2xhc3MgTURCVXBsb2FkZXJTZXJ2aWNlIHtcbiAgcXVldWU6IFVwbG9hZEZpbGVbXTtcbiAgc2VydmljZUV2ZW50czogRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD47XG4gIHVwbG9hZFNjaGVkdWxlcjogU3ViamVjdDx7IGZpbGU6IFVwbG9hZEZpbGUsIGV2ZW50OiBVcGxvYWRJbnB1dCB9PjtcbiAgc3ViczogeyBpZDogc3RyaW5nLCBzdWI6IFN1YnNjcmlwdGlvbiB9W107XG4gIGNvbnRlbnRUeXBlczogc3RyaW5nW107XG4gIG1heFVwbG9hZHM6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25jdXJyZW5jeTogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIGNvbnRlbnRUeXBlczogc3RyaW5nW10gPSBbJyonXSxcbiAgICBtYXhVcGxvYWRzOiBudW1iZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5zZXJ2aWNlRXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRPdXRwdXQ+KCk7XG4gICAgdGhpcy51cGxvYWRTY2hlZHVsZXIgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMuc3VicyA9IFtdO1xuICAgIHRoaXMuY29udGVudFR5cGVzID0gY29udGVudFR5cGVzO1xuICAgIHRoaXMubWF4VXBsb2FkcyA9IG1heFVwbG9hZHM7XG5cbiAgICB0aGlzLnVwbG9hZFNjaGVkdWxlclxuICAgICAgLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKHVwbG9hZCA9PiB0aGlzLnN0YXJ0VXBsb2FkKHVwbG9hZCksIGNvbmN1cnJlbmN5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh1cGxvYWRPdXRwdXQgPT4gdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQodXBsb2FkT3V0cHV0KSk7XG4gIH1cblxuICBoYW5kbGVGaWxlcyhpbmNvbWluZ0ZpbGVzOiBGaWxlTGlzdCk6IHZvaWQge1xuICAgIGNvbnN0IGFsbG93ZWRJbmNvbWluZ0ZpbGVzOiBGaWxlW10gPSBbXS5yZWR1Y2UuY2FsbChpbmNvbWluZ0ZpbGVzLCAoYWNjOiBGaWxlW10sIGNoZWNrRmlsZTogRmlsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBmdXR1cmVRdWV1ZUxlbmd0aCA9IGFjYy5sZW5ndGggKyB0aGlzLnF1ZXVlLmxlbmd0aCArIDE7XG4gICAgICBpZiAodGhpcy5pc0NvbnRlbnRUeXBlQWxsb3dlZChjaGVja0ZpbGUudHlwZSkgJiYgZnV0dXJlUXVldWVMZW5ndGggPD0gdGhpcy5tYXhVcGxvYWRzKSB7XG4gICAgICAgIGFjYyA9IGFjYy5jb25jYXQoY2hlY2tGaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlamVjdGVkRmlsZTogVXBsb2FkRmlsZSA9IHRoaXMubWFrZVVwbG9hZEZpbGUoY2hlY2tGaWxlLCBpKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAncmVqZWN0ZWQnLCBmaWxlOiByZWplY3RlZEZpbGUgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuXG4gICAgdGhpcy5xdWV1ZS5wdXNoKC4uLltdLm1hcC5jYWxsKGFsbG93ZWRJbmNvbWluZ0ZpbGVzLCAoZmlsZTogRmlsZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCB1cGxvYWRGaWxlOiBVcGxvYWRGaWxlID0gdGhpcy5tYWtlVXBsb2FkRmlsZShmaWxlLCBpKTtcbiAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ2FkZGVkVG9RdWV1ZScsIGZpbGU6IHVwbG9hZEZpbGUgfSk7XG4gICAgICByZXR1cm4gdXBsb2FkRmlsZTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdhbGxBZGRlZFRvUXVldWUnIH0pO1xuICB9XG5cbiAgaW5pdElucHV0RXZlbnRzKGlucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gaW5wdXQuc3Vic2NyaWJlKChldmVudDogVXBsb2FkSW5wdXQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICd1cGxvYWRGaWxlJzpcbiAgICAgICAgICBjb25zdCB1cGxvYWRGaWxlSW5kZXggPSB0aGlzLnF1ZXVlLmZpbmRJbmRleChmaWxlID0+IGZpbGUgPT09IGV2ZW50LmZpbGUpO1xuICAgICAgICAgIGlmICh1cGxvYWRGaWxlSW5kZXggIT09IC0xICYmIGV2ZW50LmZpbGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBsb2FkU2NoZWR1bGVyLm5leHQoeyBmaWxlOiB0aGlzLnF1ZXVlW3VwbG9hZEZpbGVJbmRleF0sIGV2ZW50OiBldmVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwbG9hZEFsbCc6XG4gICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLnF1ZXVlLmZpbHRlcihmaWxlID0+IGZpbGUucHJvZ3Jlc3Muc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuUXVldWUpO1xuICAgICAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB0aGlzLnVwbG9hZFNjaGVkdWxlci5uZXh0KHsgZmlsZTogZmlsZSwgZXZlbnQ6IGV2ZW50IH0pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICBjb25zdCBpZCA9IGV2ZW50LmlkIHx8IG51bGw7XG4gICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdWJzLmZpbmRJbmRleChzdWIgPT4gc3ViLmlkID09PSBpZCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSAmJiB0aGlzLnN1YnNbaW5kZXhdLnN1Yikge1xuICAgICAgICAgICAgdGhpcy5zdWJzW2luZGV4XS5zdWIudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZUluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgoZmlsZSA9PiBmaWxlLmlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAoZmlsZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICB0aGlzLnF1ZXVlW2ZpbGVJbmRleF0ucHJvZ3Jlc3Muc3RhdHVzID0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnY2FuY2VsbGVkJywgZmlsZTogdGhpcy5xdWV1ZVtmaWxlSW5kZXhdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsQWxsJzpcbiAgICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5zdWIpIHtcbiAgICAgICAgICAgICAgc3ViLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5xdWV1ZS5maW5kKHVwbG9hZEZpbGUgPT4gdXBsb2FkRmlsZS5pZCA9PT0gc3ViLmlkKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGZpbGUucHJvZ3Jlc3Muc3RhdHVzID0gVXBsb2FkU3RhdHVzLkNhbmNlbGxlZDtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlRXZlbnRzLmVtaXQoeyB0eXBlOiAnY2FuY2VsbGVkJywgZmlsZTogZmlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBpZiAoIWV2ZW50LmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaSA9IHRoaXMucXVldWUuZmluZEluZGV4KGZpbGUgPT4gZmlsZS5pZCA9PT0gZXZlbnQuaWQpO1xuICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMucXVldWVbaV07XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlbW92ZWQnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVtb3ZlQWxsJzpcbiAgICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZUV2ZW50cy5lbWl0KHsgdHlwZTogJ3JlbW92ZWRBbGwnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0VXBsb2FkKHVwbG9hZDogeyBmaWxlOiBVcGxvYWRGaWxlLCBldmVudDogVXBsb2FkSW5wdXQgfSk6IE9ic2VydmFibGU8VXBsb2FkT3V0cHV0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHRoaXMudXBsb2FkRmlsZSh1cGxvYWQuZmlsZSwgdXBsb2FkLmV2ZW50KVxuICAgICAgICAuc3Vic2NyaWJlKG91dHB1dCA9PiB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChvdXRwdXQpO1xuICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnMucHVzaCh7IGlkOiB1cGxvYWQuZmlsZS5pZCwgc3ViOiBzdWIgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGxvYWRGaWxlKGZpbGU6IFVwbG9hZEZpbGUsIGV2ZW50OiBVcGxvYWRJbnB1dCk6IE9ic2VydmFibGU8VXBsb2FkT3V0cHV0PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IGV2ZW50LnVybCB8fCAnJztcbiAgICAgIGNvbnN0IG1ldGhvZCA9IGV2ZW50Lm1ldGhvZCB8fCAnUE9TVCc7XG4gICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YSB8fCB7fTtcbiAgICAgIGNvbnN0IGhlYWRlcnMgPSBldmVudC5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGNvbnN0IHRpbWU6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbGV0IHByb2dyZXNzU3RhcnRUaW1lOiBudW1iZXIgPSAoZmlsZS5wcm9ncmVzcy5kYXRhICYmIGZpbGUucHJvZ3Jlc3MuZGF0YS5zdGFydFRpbWUpIHx8IHRpbWU7XG4gICAgICBsZXQgc3BlZWQgPSAwO1xuICAgICAgbGV0IGV0YTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZTogUHJvZ3Jlc3NFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGgucm91bmQoKGUubG9hZGVkICogMTAwKSAvIGUudG90YWwpO1xuICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWU7XG4gICAgICAgICAgc3BlZWQgPSBNYXRoLnJvdW5kKGUubG9hZGVkIC8gZGlmZiAqIDEwMDApO1xuICAgICAgICAgIHByb2dyZXNzU3RhcnRUaW1lID0gKGZpbGUucHJvZ3Jlc3MuZGF0YSAmJiBmaWxlLnByb2dyZXNzLmRhdGEuc3RhcnRUaW1lKSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICBldGEgPSBNYXRoLmNlaWwoKGUudG90YWwgLSBlLmxvYWRlZCkgLyBzcGVlZCk7XG5cbiAgICAgICAgICBmaWxlLnByb2dyZXNzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuVXBsb2FkaW5nLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlLFxuICAgICAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgICAgIHNwZWVkSHVtYW46IGAke2h1bWFuaXplQnl0ZXMoc3BlZWQpfS9zYCxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBwcm9ncmVzc1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogbnVsbCxcbiAgICAgICAgICAgICAgZXRhOiBldGEsXG4gICAgICAgICAgICAgIGV0YUh1bWFuOiB0aGlzLnNlY29uZHNUb0h1bWFuKGV0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IHR5cGU6ICd1cGxvYWRpbmcnLCBmaWxlOiBmaWxlIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSk7XG5cbiAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IoZSk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9KTtcblxuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgY29uc3Qgc3BlZWRBdmVyYWdlID0gTWF0aC5yb3VuZChmaWxlLnNpemUgLyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwcm9ncmVzc1N0YXJ0VGltZSkgKiAxMDAwKTtcbiAgICAgICAgICBmaWxlLnByb2dyZXNzID0ge1xuICAgICAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuRG9uZSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcGVyY2VudGFnZTogMTAwLFxuICAgICAgICAgICAgICBzcGVlZDogc3BlZWRBdmVyYWdlLFxuICAgICAgICAgICAgICBzcGVlZEh1bWFuOiBgJHtodW1hbml6ZUJ5dGVzKHNwZWVkQXZlcmFnZSl9L3NgLFxuICAgICAgICAgICAgICBzdGFydFRpbWU6IHByb2dyZXNzU3RhcnRUaW1lLFxuICAgICAgICAgICAgICBlbmRUaW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgZXRhOiBldGEsXG4gICAgICAgICAgICAgIGV0YUh1bWFuOiB0aGlzLnNlY29uZHNUb0h1bWFuKGV0YSB8fCAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBmaWxlLnJlc3BvbnNlU3RhdHVzID0geGhyLnN0YXR1cztcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmaWxlLnJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZpbGUucmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlsZS5yZXNwb25zZUhlYWRlcnMgPSB0aGlzLnBhcnNlUmVzcG9uc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG5cbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgdHlwZTogJ2RvbmUnLCBmaWxlOiBmaWxlIH0pO1xuXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGV2ZW50LndpdGhDcmVkZW50aWFscyA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBsb2FkRmlsZSA9IDxCbG9iRmlsZT5maWxlLm5hdGl2ZUZpbGU7XG4gICAgICAgIGNvbnN0IHVwbG9hZEluZGV4ID0gdGhpcy5xdWV1ZS5maW5kSW5kZXgob3V0RmlsZSA9PiBvdXRGaWxlLm5hdGl2ZUZpbGUgPT09IHVwbG9hZEZpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnF1ZXVlW3VwbG9hZEluZGV4XS5wcm9ncmVzcy5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5DYW5jZWxsZWQpIHtcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4gZmlsZS5mb3JtLmFwcGVuZChrZXksIGRhdGFba2V5XSkpO1xuICAgICAgICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKGtleSA9PiB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSkpO1xuXG4gICAgICAgIGZpbGUuZm9ybS5hcHBlbmQoZXZlbnQuZmllbGROYW1lIHx8ICdmaWxlJywgdXBsb2FkRmlsZSwgdXBsb2FkRmlsZS5uYW1lKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2VFdmVudHMuZW1pdCh7IHR5cGU6ICdzdGFydCcsIGZpbGU6IGZpbGUgfSk7XG4gICAgICAgIHhoci5zZW5kKGZpbGUuZm9ybSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlY29uZHNUb0h1bWFuKHNlYzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUoc2VjICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xuICB9XG5cbiAgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XG4gIH1cblxuICBzZXRDb250ZW50VHlwZXMoY29udGVudFR5cGVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY29udGVudFR5cGVzICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZW50VHlwZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgaWYgKGNvbnRlbnRUeXBlcy5maW5kKCh0eXBlOiBzdHJpbmcpID0+IHR5cGUgPT09ICcqJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRUeXBlcyA9IFsnKiddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZXMgPSBjb250ZW50VHlwZXM7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29udGVudFR5cGVzID0gWycqJ107XG4gIH1cblxuICBhbGxDb250ZW50VHlwZXNBbGxvd2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRUeXBlcy5maW5kKCh0eXBlOiBzdHJpbmcpID0+IHR5cGUgPT09ICcqJykgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzQ29udGVudFR5cGVBbGxvd2VkKG1pbWV0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5hbGxDb250ZW50VHlwZXNBbGxvd2VkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb250ZW50VHlwZXMuZmluZCgodHlwZTogc3RyaW5nKSA9PiB0eXBlID09PSBtaW1ldHlwZSkgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG1ha2VVcGxvYWRGaWxlKGZpbGU6IEZpbGUsIGluZGV4OiBudW1iZXIpOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsZUluZGV4OiBpbmRleCxcbiAgICAgIGlkOiB0aGlzLmdlbmVyYXRlSWQoKSxcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgIGZvcm06IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgc3RhdHVzOiBVcGxvYWRTdGF0dXMuUXVldWUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwZXJjZW50YWdlOiAwLFxuICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgIHNwZWVkSHVtYW46IGAke2h1bWFuaXplQnl0ZXMoMCl9L3NgLFxuICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICBlbmRUaW1lOiBudWxsLFxuICAgICAgICAgIGV0YTogbnVsbCxcbiAgICAgICAgICBldGFIdW1hbjogbnVsbFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICBzdWI6IHVuZGVmaW5lZCxcbiAgICAgIG5hdGl2ZUZpbGU6IGZpbGVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJzZVJlc3BvbnNlSGVhZGVycyhodHRwSGVhZGVyczogYW55KSB7XG4gICAgaWYgKCFodHRwSGVhZGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gaHR0cEhlYWRlcnMuc3BsaXQoJ1xcbicpXG4gICAgICAubWFwKCh4OiBhbnkpID0+IHguc3BsaXQoLzogKi8sIDIpKVxuICAgICAgLmZpbHRlcigoeDogYW55KSA9PiB4WzBdKVxuICAgICAgLnJlZHVjZSgoYWM6IGFueSwgeDogYW55KSA9PiB7XG4gICAgICAgIGFjW3hbMF1dID0geFsxXTtcbiAgICAgICAgcmV0dXJuIGFjO1xuICAgICAgfSwge30pO1xuICB9XG59XG4iXX0=