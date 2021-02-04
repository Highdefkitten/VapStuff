import ConversationContext from './ConversationContext.js';
import Prompt from './Prompt.js';
export default interface ValidatingPrompt extends Prompt {
    acceptInput(context: ConversationContext, input: string): Prompt;
    blocksForInput(context: ConversationContext): boolean;
    getPromptText(arg0: ConversationContext): string;
}
export default class ValidatingPrompt {
    static get $javaClass(): any;
    constructor();
    static get END_OF_CONVERSATION(): Prompt;
}
