import PermissionAttachment from './PermissionAttachment.js';
export default interface PermissionRemovedExecutor {
    attachmentRemoved(arg0: PermissionAttachment): void;
}
export default class PermissionRemovedExecutor {
    static get $javaClass(): any;
}
