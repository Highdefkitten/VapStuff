export default class ConversationCanceller {
    static get $javaClass() {
        return Java.type('org.bukkit.conversations.ConversationCanceller');
    }
    static $isInstance(obj) {
        return obj instanceof ConversationCanceller.$javaClass;
    }
}
