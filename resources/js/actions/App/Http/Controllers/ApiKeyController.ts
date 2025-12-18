import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api/api-keys'
*/
const storeb151c687b3717653ee300e7dd00a515e = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'post',
})

storeb151c687b3717653ee300e7dd00a515e.definition = {
    methods: ["post"],
    url: '/api/api-keys',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api/api-keys'
*/
storeb151c687b3717653ee300e7dd00a515e.url = (options?: RouteQueryOptions) => {
    return storeb151c687b3717653ee300e7dd00a515e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api/api-keys'
*/
storeb151c687b3717653ee300e7dd00a515e.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api/api-keys'
*/
const storeb151c687b3717653ee300e7dd00a515eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api/api-keys'
*/
storeb151c687b3717653ee300e7dd00a515eForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'post',
})

storeb151c687b3717653ee300e7dd00a515e.form = storeb151c687b3717653ee300e7dd00a515eForm
/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
const storef30d7df9fc1988ccee7b33246edec547 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'post',
})

storef30d7df9fc1988ccee7b33246edec547.definition = {
    methods: ["post"],
    url: '/api-keys',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
storef30d7df9fc1988ccee7b33246edec547.url = (options?: RouteQueryOptions) => {
    return storef30d7df9fc1988ccee7b33246edec547.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
storef30d7df9fc1988ccee7b33246edec547.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storef30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
const storef30d7df9fc1988ccee7b33246edec547Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
storef30d7df9fc1988ccee7b33246edec547Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storef30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'post',
})

storef30d7df9fc1988ccee7b33246edec547.form = storef30d7df9fc1988ccee7b33246edec547Form

export const store = {
    '/api/api-keys': storeb151c687b3717653ee300e7dd00a515e,
    '/api-keys': storef30d7df9fc1988ccee7b33246edec547,
}

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
const indexb151c687b3717653ee300e7dd00a515e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'get',
})

indexb151c687b3717653ee300e7dd00a515e.definition = {
    methods: ["get","head"],
    url: '/api/api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
indexb151c687b3717653ee300e7dd00a515e.url = (options?: RouteQueryOptions) => {
    return indexb151c687b3717653ee300e7dd00a515e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
indexb151c687b3717653ee300e7dd00a515e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
indexb151c687b3717653ee300e7dd00a515e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
const indexb151c687b3717653ee300e7dd00a515eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
indexb151c687b3717653ee300e7dd00a515eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb151c687b3717653ee300e7dd00a515e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api/api-keys'
*/
indexb151c687b3717653ee300e7dd00a515eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb151c687b3717653ee300e7dd00a515e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexb151c687b3717653ee300e7dd00a515e.form = indexb151c687b3717653ee300e7dd00a515eForm
/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
const indexf30d7df9fc1988ccee7b33246edec547 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'get',
})

indexf30d7df9fc1988ccee7b33246edec547.definition = {
    methods: ["get","head"],
    url: '/api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexf30d7df9fc1988ccee7b33246edec547.url = (options?: RouteQueryOptions) => {
    return indexf30d7df9fc1988ccee7b33246edec547.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexf30d7df9fc1988ccee7b33246edec547.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexf30d7df9fc1988ccee7b33246edec547.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
const indexf30d7df9fc1988ccee7b33246edec547Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexf30d7df9fc1988ccee7b33246edec547Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf30d7df9fc1988ccee7b33246edec547.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexf30d7df9fc1988ccee7b33246edec547Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexf30d7df9fc1988ccee7b33246edec547.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexf30d7df9fc1988ccee7b33246edec547.form = indexf30d7df9fc1988ccee7b33246edec547Form

export const index = {
    '/api/api-keys': indexb151c687b3717653ee300e7dd00a515e,
    '/api-keys': indexf30d7df9fc1988ccee7b33246edec547,
}

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
const showd86bf8ade2939943a7d291a1b5eec6ee = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'get',
})

showd86bf8ade2939943a7d291a1b5eec6ee.definition = {
    methods: ["get","head"],
    url: '/api/api-keys/{apiKey}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
showd86bf8ade2939943a7d291a1b5eec6ee.url = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { apiKey: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { apiKey: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            apiKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        apiKey: typeof args.apiKey === 'object'
        ? args.apiKey.id
        : args.apiKey,
    }

    return showd86bf8ade2939943a7d291a1b5eec6ee.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
showd86bf8ade2939943a7d291a1b5eec6ee.get = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
showd86bf8ade2939943a7d291a1b5eec6ee.head = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
const showd86bf8ade2939943a7d291a1b5eec6eeForm = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
showd86bf8ade2939943a7d291a1b5eec6eeForm.get = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api/api-keys/{apiKey}'
*/
showd86bf8ade2939943a7d291a1b5eec6eeForm.head = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showd86bf8ade2939943a7d291a1b5eec6ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showd86bf8ade2939943a7d291a1b5eec6ee.form = showd86bf8ade2939943a7d291a1b5eec6eeForm
/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
const show2beb5c1b604f0218f60d694f41a6a41d = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'get',
})

show2beb5c1b604f0218f60d694f41a6a41d.definition = {
    methods: ["get","head"],
    url: '/api-keys/{api_key}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show2beb5c1b604f0218f60d694f41a6a41d.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { api_key: args }
    }

    if (Array.isArray(args)) {
        args = {
            api_key: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        api_key: args.api_key,
    }

    return show2beb5c1b604f0218f60d694f41a6a41d.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show2beb5c1b604f0218f60d694f41a6a41d.get = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show2beb5c1b604f0218f60d694f41a6a41d.head = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
const show2beb5c1b604f0218f60d694f41a6a41dForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show2beb5c1b604f0218f60d694f41a6a41dForm.get = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show2beb5c1b604f0218f60d694f41a6a41dForm.head = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show2beb5c1b604f0218f60d694f41a6a41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show2beb5c1b604f0218f60d694f41a6a41d.form = show2beb5c1b604f0218f60d694f41a6a41dForm

export const show = {
    '/api/api-keys/{apiKey}': showd86bf8ade2939943a7d291a1b5eec6ee,
    '/api-keys/{api_key}': show2beb5c1b604f0218f60d694f41a6a41d,
}

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api/api-keys/{apiKey}'
*/
const updated86bf8ade2939943a7d291a1b5eec6ee = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'put',
})

updated86bf8ade2939943a7d291a1b5eec6ee.definition = {
    methods: ["put"],
    url: '/api/api-keys/{apiKey}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api/api-keys/{apiKey}'
*/
updated86bf8ade2939943a7d291a1b5eec6ee.url = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { apiKey: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { apiKey: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            apiKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        apiKey: typeof args.apiKey === 'object'
        ? args.apiKey.id
        : args.apiKey,
    }

    return updated86bf8ade2939943a7d291a1b5eec6ee.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api/api-keys/{apiKey}'
*/
updated86bf8ade2939943a7d291a1b5eec6ee.put = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updated86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api/api-keys/{apiKey}'
*/
const updated86bf8ade2939943a7d291a1b5eec6eeForm = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated86bf8ade2939943a7d291a1b5eec6ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api/api-keys/{apiKey}'
*/
updated86bf8ade2939943a7d291a1b5eec6eeForm.put = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updated86bf8ade2939943a7d291a1b5eec6ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updated86bf8ade2939943a7d291a1b5eec6ee.form = updated86bf8ade2939943a7d291a1b5eec6eeForm
/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
const update2beb5c1b604f0218f60d694f41a6a41d = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'put',
})

update2beb5c1b604f0218f60d694f41a6a41d.definition = {
    methods: ["put","patch"],
    url: '/api-keys/{api_key}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update2beb5c1b604f0218f60d694f41a6a41d.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { api_key: args }
    }

    if (Array.isArray(args)) {
        args = {
            api_key: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        api_key: args.api_key,
    }

    return update2beb5c1b604f0218f60d694f41a6a41d.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update2beb5c1b604f0218f60d694f41a6a41d.put = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update2beb5c1b604f0218f60d694f41a6a41d.patch = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
const update2beb5c1b604f0218f60d694f41a6a41dForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2beb5c1b604f0218f60d694f41a6a41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update2beb5c1b604f0218f60d694f41a6a41dForm.put = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2beb5c1b604f0218f60d694f41a6a41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update2beb5c1b604f0218f60d694f41a6a41dForm.patch = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update2beb5c1b604f0218f60d694f41a6a41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update2beb5c1b604f0218f60d694f41a6a41d.form = update2beb5c1b604f0218f60d694f41a6a41dForm

export const update = {
    '/api/api-keys/{apiKey}': updated86bf8ade2939943a7d291a1b5eec6ee,
    '/api-keys/{api_key}': update2beb5c1b604f0218f60d694f41a6a41d,
}

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api/api-keys/{apiKey}'
*/
const destroyd86bf8ade2939943a7d291a1b5eec6ee = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'delete',
})

destroyd86bf8ade2939943a7d291a1b5eec6ee.definition = {
    methods: ["delete"],
    url: '/api/api-keys/{apiKey}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api/api-keys/{apiKey}'
*/
destroyd86bf8ade2939943a7d291a1b5eec6ee.url = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { apiKey: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { apiKey: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            apiKey: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        apiKey: typeof args.apiKey === 'object'
        ? args.apiKey.id
        : args.apiKey,
    }

    return destroyd86bf8ade2939943a7d291a1b5eec6ee.definition.url
            .replace('{apiKey}', parsedArgs.apiKey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api/api-keys/{apiKey}'
*/
destroyd86bf8ade2939943a7d291a1b5eec6ee.delete = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyd86bf8ade2939943a7d291a1b5eec6ee.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api/api-keys/{apiKey}'
*/
const destroyd86bf8ade2939943a7d291a1b5eec6eeForm = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd86bf8ade2939943a7d291a1b5eec6ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api/api-keys/{apiKey}'
*/
destroyd86bf8ade2939943a7d291a1b5eec6eeForm.delete = (args: { apiKey: number | { id: number } } | [apiKey: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyd86bf8ade2939943a7d291a1b5eec6ee.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyd86bf8ade2939943a7d291a1b5eec6ee.form = destroyd86bf8ade2939943a7d291a1b5eec6eeForm
/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
const destroy2beb5c1b604f0218f60d694f41a6a41d = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'delete',
})

destroy2beb5c1b604f0218f60d694f41a6a41d.definition = {
    methods: ["delete"],
    url: '/api-keys/{api_key}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
destroy2beb5c1b604f0218f60d694f41a6a41d.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { api_key: args }
    }

    if (Array.isArray(args)) {
        args = {
            api_key: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        api_key: args.api_key,
    }

    return destroy2beb5c1b604f0218f60d694f41a6a41d.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
destroy2beb5c1b604f0218f60d694f41a6a41d.delete = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy2beb5c1b604f0218f60d694f41a6a41d.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
const destroy2beb5c1b604f0218f60d694f41a6a41dForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy2beb5c1b604f0218f60d694f41a6a41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
destroy2beb5c1b604f0218f60d694f41a6a41dForm.delete = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy2beb5c1b604f0218f60d694f41a6a41d.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy2beb5c1b604f0218f60d694f41a6a41d.form = destroy2beb5c1b604f0218f60d694f41a6a41dForm

export const destroy = {
    '/api/api-keys/{apiKey}': destroyd86bf8ade2939943a7d291a1b5eec6ee,
    '/api-keys/{api_key}': destroy2beb5c1b604f0218f60d694f41a6a41d,
}

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/api-keys/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::create
* @see app/Http/Controllers/ApiKeyController.php:30
* @route '/api-keys/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
export const edit = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/api-keys/{api_key}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
edit.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { api_key: args }
    }

    if (Array.isArray(args)) {
        args = {
            api_key: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        api_key: args.api_key,
    }

    return edit.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
edit.get = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
edit.head = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
const editForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
editForm.get = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::edit
* @see app/Http/Controllers/ApiKeyController.php:95
* @route '/api-keys/{api_key}/edit'
*/
editForm.head = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const ApiKeyController = { store, index, show, update, destroy, create, edit }

export default ApiKeyController