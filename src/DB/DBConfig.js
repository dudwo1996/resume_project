export const DBConfig = {
    name: 'MemberDB',
    version: 2,
    objectStoresMeta: [
        {
            store: 'member',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'nickname', keypath: 'nickname', options: { unique: false } },
                { name: 'id', keypath: 'id', options: { unique: false } },
                { name: 'password', keypath: 'password', options: { unique: false } },
            ],
        },
    ],
};
