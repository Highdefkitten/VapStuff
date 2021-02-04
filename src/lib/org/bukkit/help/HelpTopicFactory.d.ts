import Command from '../../../org/bukkit/command/Command.js';
import HelpTopic from './HelpTopic.js';
export default interface HelpTopicFactory {
    createTopic(arg0: Command): HelpTopic;
}
export default class HelpTopicFactory {
    static get $javaClass(): any;
}
