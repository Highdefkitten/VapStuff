import Conversation from './Conversation.js';
import ConversationAbandonedEvent from './ConversationAbandonedEvent.js';
export default interface Conversable {
    abandonConversation(arg0: Conversation): void;
    abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
    acceptConversationInput(arg0: string): void;
    beginConversation(arg0: Conversation): boolean;
    isConversing(): boolean;
    sendRawMessage(arg0: string): void;
}
export default class Conversable {
    static get $javaClass(): any;
}