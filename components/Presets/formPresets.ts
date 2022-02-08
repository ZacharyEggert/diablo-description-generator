import { defaultContext, emptyContext, IFormContext } from 'lib/context';

const formPresets: {
    [key: string]: { formState: IFormContext; otherState: IFormContext } & {
        name: string;
    };
} = {
    Clear: {
        formState: defaultContext,
        otherState: emptyContext,
        name: 'Clear',
    },
};
export default formPresets;
