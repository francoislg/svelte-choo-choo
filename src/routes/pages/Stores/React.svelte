<script>
    import CodeHighlight from "$lib/CodeHighlight.svelte";
</script>

<h3>Stores - React/Redux Way</h3>
<CodeHighlight code={`// CatalogsReducers.ts
const initialState: ICatalogsState = {
    data: [],
};

const updateCatalogs = (state: ICatalogsState, action: IReduxAction<IUpdateCatalogsPayload>): ICatalogsState => ({
    ...state,
    data: action.payload.catalogs,
});

const CatalogsReducers: Record<string, (...args: any[]) => ICatalogsState> = {
    [CatalogsActionsTypes.updateCatalogs]: updateCatalogs,
};

export const catalogsReducer = (
    state: ICatalogsState = initialState,
    action: IReduxAction<any> = {type: '', payload: {}}
) => (!_.isUndefined(CatalogsReducers[action.type]) ? CatalogsReducers[action.type](state, action) : state);
`} />
<CodeHighlight code={`// CatalogsActions.ts
export const CatalogsActionsTypes = {
    updateCatalogs: 'UPDATE_CATALOGS',
    fetch: 'FETCH_CATALOGS',
    fetchFields: 'FETCH_CATALOG_FIELDS',
    updateFields: 'UPDATE_CATALOG_FIELDS',
    delete: 'DELETE_CATALOG',
    create: 'CREATE_CATALOG',
};

export interface IUpdateCatalogsPayload {
    catalogs: CatalogModel[];
}

const updateCatalogs = (catalogs: CatalogModel[]): IReduxAction<IUpdateCatalogsPayload> => ({
    type: CatalogsActionsTypes.updateCatalogs,
    payload: {
        catalogs,
    },
});

const fetchCatalogs = (client = Platform.catalog): IThunkAction<void, CommerceState> => async (dispatch, getState) => {
    const tableId = CatalogComponentIds.CatalogsTable;
    dispatch(RequestsActions.request(CatalogsActionsTypes.fetch));
    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(tableId, getState());
    const pageOptions: CatalogsListOptions = {
        page: compositeState.pageNb,
        pageSize: compositeState.perPage,
        filter: compositeState.filter,
    };
    try {
        const catalogs = await client.list(pageOptions);
        dispatch(updateCatalogs(catalogs.items));
        dispatch(TableWithPaginationActions.setCount(tableId, catalogs.totalEntries));
        dispatch(turnOffLoading([tableId]));
        dispatch(RequestsActions.success(CatalogsActionsTypes.fetch));
    } catch (exception) {
        dispatch(RequestsActions.failure(CatalogsActionsTypes.fetch, exception));
        ToastNotifier.handleError(locales.format('fetchCatalogsFailed'));
    }
};

// ...

export const CatalogsActions = {
    reloadCatalogsTable,
    fetchCatalogs,
    deleteCatalog,
    createCatalog,
};
`} />
