export const DBConfig = {
    name: 'IndexedDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'member',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'nickname', keypath: 'nickname', options: { unique: false } },
                { name: 'id', keypath: 'id', options: { unique: true } },
                { name: 'password', keypath: 'password', options: { unique: false } },
            ],
        },
        {
            store: 'resume',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [{ name: 'id', keypath: 'id', options: { unique: true } }],
        },
    ],
};
