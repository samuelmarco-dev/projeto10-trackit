/*
import { createContext } from 'react';

export const TContext = createContext();

chamada/uso:
    import { TContext } from './t';
    <TContext.Provider value={...}>
        <TContext.Consumer>
    </TContext.Provider>

    e no componente que vai usar:
    import { TContext } from './t';
    import { useContext } from 'react';

    const X = useContext(TContext);
    return <X.Consumer>{(t) => <div>{t('hello')}</div>}</X.Consumer>
    export default X;
*/