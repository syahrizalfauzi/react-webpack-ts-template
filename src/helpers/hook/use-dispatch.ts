import { AnyAction, Dispatch } from 'redux';
import { useDispatch as useRDispatch } from 'react-redux';

const useDispatch = () => {
    const rdispatch = useRDispatch();

    async function doDispatch<T>(
        // eslint-disable-next-line no-unused-vars
        action: AnyAction | ((dispatch: Dispatch<AnyAction>) => Promise<T>)
    ) {
        return rdispatch(action) as T;
    }
    return doDispatch;
};

export default useDispatch;
