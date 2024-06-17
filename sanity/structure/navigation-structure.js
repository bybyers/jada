import { LinkIcon } from '@sanity/icons';

const Navigation = (S) => {
  return S.listItem()
    .title('Navigation')
    .icon(LinkIcon)
    .child(
      S.list()
        .title('Navigation')
        .items([
          // Custom Header item
          S.listItem()
            .title('Header')
            .icon(LinkIcon)
            .child(
              S.editor()
                .id('header')
                .schemaType('navigation')
                .documentId('header')
            ),
          // Custom Footer item
          S.listItem()
            .title('Footer')
            .icon(LinkIcon)
            .child(
              S.editor()
                .id('footer')
                .schemaType('navigation')
                .documentId('footer')
            ),
        ])
    );
};

export default Navigation;
