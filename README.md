# bedrock-angular-meta

A module that improves SEO by dynamically setting `meta`
tags in a Bedrock AngularJS application.

The following `meta` tag attributes are supported:
- `property`
- `name`
- `itemprop`

## Example Angular Controller
```
function Ctrl($document, $location, brMetaService) {

  brMetaService.set([
    // example `property` attributes
    {
      property: 'og:description',
      content: 'About Page - property'
    },
    {
      property: 'og:image',
      content: 'https://example.com/image.jpg'
    },
    {
      property: 'og:title',
      content: $document[0].title
    },
    {
      property: 'og:url',
      content: $location.absUrl()
    },
    // example `name` attribute
    {
      name: 'og:description',
      content: 'About Page - name'
    }
    // example `itemprop` attribute
    {
      itemprop: 'name',
      content: 'About Page - itemprop'
    }
  ]);
}
```
