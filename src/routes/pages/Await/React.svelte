<script>
	import CodeHighlight from '$lib/CodeHighlight.svelte';
</script>

<div class="pad">
	<h3>Asynchronicité - React Way</h3>
	<CodeHighlight
		code={`// useFetchConfigurations.ts
// import ...

export const useFetchConfigurations = (): {
    isLoading: boolean;
    configurations: CatalogConfigurationModel[];
    refresh: () => void;
} => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [configurations, setConfigurations] = React.useState<CatalogConfigurationModel[]>([]);
    const [configurationsNeedRefresh, setConfigurationsNeedRefresh] = React.useState(true);

    React.useEffect(() => {
        if (!configurationsNeedRefresh) {
            return;
        }

        setIsLoading(true);
        Platform.catalogConfiguration
            .list({
                page: 0,
                pageSize: 100,
            })
            .then((fetchedConfigurations) => {
                setConfigurations(fetchedConfigurations.items);
                setIsLoading(false);
                setConfigurationsNeedRefresh(false);
            });
    }, [configurationsNeedRefresh]);

    return {isLoading, configurations, refresh: () => setConfigurationsNeedRefresh(true)};
};`}
	/>
	<CodeHighlight
		code={`// ConfigurationStep.ts
// import ...

export const ConfigurationStep = ... {
    // ...
    const {isLoading, configurations, refresh: refreshConfigurations} = useFetchConfigurations();
    // ...

    return (
            <Section ...>
                // ...
                {isLoading ? (
                    <Loading fullContent />
                ) : (
                    configurations
                        .map((config) => ({
                            ...config,
                            disabled: isConfigDisabled(props, config),
                        }))
                        .sort((a, b) => (a.disabled === b.disabled ? 0 : a.disabled ? 1 : -1))
                        .map((configuration) => (
                            <ConfigurationCardSelect
                                configuration={configuration}
                                key={configuration.id}
                                value={configuration.id}
                                disabled={configuration.disabled}
                                onDeleteConfiguration={refreshConfigurations}
                                disableNavigateToEdit
                                disableDelete
                            />
                        ))
                )}
            </Section>
        );
}
`}
	/>
</div>
