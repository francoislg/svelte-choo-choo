<script>
    import CodeHighlight from "$lib/CodeHighlight.svelte";
</script>

<h3>Stores - React/Redux Way Part 2</h3>
<CodeHighlight code={`// CatalogsTable.ts
const makeMapStateToProps = () => {
    const isLoadingSelector = RequestsSelectors.createLoadingSelector([
        CatalogsActionsTypes.fetch,
        {
            requestName: CatalogsActionsTypes.delete,
            isLoadingWhenUnknown: false,
        },
    ]);
    return (state: CommerceState) => ({
        isLoading: isLoadingSelector(state),
        catalogs: state.catalogManager.catalogs.data,
        orgId: OrganizationSelectors.getOrganizationId(state),
        canEdit: PrivilegeSelectors.canEditCatalogs(state),
        canView: PrivilegeSelectors.canViewCatalogs(state),
        sourceIdToNameMap: SourcesSelectors.getCatalogEnabledSourceIdToNameMap(state),
    });
};

const mapDispatchToProps = (dispatch: IDispatch) => ({
    fetch: () => {
        dispatch(CatalogsActions.fetchCatalogs());
        dispatch(SourcesActions.fetchSources());
    },
    deleteCatalog: (catalogId: string) => dispatch(CatalogsActions.deleteCatalog(catalogId)),
    resetFilter: () => dispatch(FilterBoxActions.filterThrough(CatalogComponentIds.CatalogsTable, '')),
});

// ...

return (
    <CatalogsHOCTable
        id={CatalogComponentIds.CatalogsTable}
        className="table mod-align-header"
        data={catalogs}
        renderBody={(data: CatalogModel[]) =>
            data.map((catalog) => (
                <TableRow
                    key={catalog.id}
                    {...catalog}
                    sourceIdToNameMap={sourceIdToNameMap}
                    canEdit={canEdit}
                    canView={canView}
                    deleteCatalog={deleteCatalog}
                />
            ))
        }
        tableHeader={
            // ...
        }
        isLoading={isLoading}
        loading={{numberOfColumns: 4, defaultLoadingRow: PerPageNumbers[1]}}
        onUpdate={fetch}
        // ...
    />
);
`} />