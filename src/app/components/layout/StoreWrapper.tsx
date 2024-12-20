'use client'
import { persistor, store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


interface StoreWrapperProps {
    children: React.ReactNode;
}

const StoreWrapper: React.FC<StoreWrapperProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};

export default StoreWrapper;