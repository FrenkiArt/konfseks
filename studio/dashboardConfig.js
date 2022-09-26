export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6331b912d217d2007fca994e',
                  title: 'Sanity Studio',
                  name: 'konfseks-studio',
                  apiId: '69fd6936-d024-40d4-9780-6403b1d1cd25'
                },
                {
                  buildHookId: '6331b912d217d200b5ca9a69',
                  title: 'Blog Website',
                  name: 'konfseks',
                  apiId: '98543945-647a-4dfc-8b55-d0ed5d0996ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FrenkiArt/konfseks',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://konfseks.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
