import HelpTopic from './HelpTopic.js';
import HelpTopicComparator$TopicNameComparator from './HelpTopicComparator$TopicNameComparator.js';
export default interface HelpTopicComparator {
    compare(lhs: HelpTopic, rhs: HelpTopic): number;
    compare(arg0: any, arg1: any): number;
    reversed(): any;
    thenComparing(arg0: any): any;
    thenComparing(arg0: any): any;
    thenComparing(arg0: any, arg1: any): any;
    thenComparingDouble(arg0: any): any;
    thenComparingInt(arg0: any): any;
    thenComparingLong(arg0: any): any;
}
export default class HelpTopicComparator {
    static get $javaClass(): any;
    static helpTopicComparatorInstance(): HelpTopicComparator;
    static topicNameComparatorInstance(): HelpTopicComparator$TopicNameComparator;
}
