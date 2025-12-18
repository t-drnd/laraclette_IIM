import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api-keys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::index
* @see app/Http/Controllers/ApiKeyController.php:13
* @route '/api-keys'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

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
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api-keys',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ApiKeyController::store
* @see app/Http/Controllers/ApiKeyController.php:35
* @route '/api-keys'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
export const show = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api-keys/{api_key}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show.get = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
show.head = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
const showForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
showForm.get = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ApiKeyController::show
* @see app/Http/Controllers/ApiKeyController.php:82
* @route '/api-keys/{api_key}'
*/
showForm.head = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

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

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
export const update = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api-keys/{api_key}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update.put = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
update.patch = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ApiKeyController::update
* @see app/Http/Controllers/ApiKeyController.php:108
* @route '/api-keys/{api_key}'
*/
const updateForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.put = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
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
updateForm.patch = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
export const destroy = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api-keys/{api_key}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
destroy.url = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{api_key}', parsedArgs.api_key.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
destroy.delete = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ApiKeyController::destroy
* @see app/Http/Controllers/ApiKeyController.php:137
* @route '/api-keys/{api_key}'
*/
const destroyForm = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
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
destroyForm.delete = (args: { api_key: string | number } | [api_key: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const apiKeys = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default apiKeys