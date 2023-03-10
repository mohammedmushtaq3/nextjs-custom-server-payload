export const home = {
  layout: [
    {
      blockType: 'content',
      blockName: 'Intro - Rich Text Demo',
      content: [
        {
          children: [
            {
              text: 'Here is an H2 to introduce the article',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'Here is some content that will be rendered as an HTML paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            },
          ],
          type: 'p',
        },
        {
          children: [
            {
              text: 'Lorem Ipsum',
              bold: true,
            },
            {
              text: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
          ],
          type: 'p',
        },
      ],
    },
    {
      type: 'wide',
      blockType: 'image',
      blockName: 'Wide Image Demo',
      image: '{{IMAGE_ID}}',
      caption: [
        {
          children: [
            {
              text: "Here is an image caption. It's got a ",
            },
            {
              type: 'link',
              url: 'https://payloadcms.com',
              newTab: true,
              children: [
                {
                  text: 'link embedded in it',
                },
              ],
            },
            {
              text: '',
            },
          ],
        },
      ],
    },
    {
      type: 'normal',
      blockType: 'image',
      blockName: 'Normal Width Image Demo',
      image: '{{IMAGE_ID}}',
      caption: [
        {
          children: [
            {
              text: 'This is a caption for an image.',
            },
          ],
        },
      ],
    },
    {
      blockType: 'cta',
      blockName: 'Calls to Action',
      content: [
        {
          children: [
            {
              text: 'Here is a Call to Action block',
            },
          ],
          type: 'h4',
        },
      ],
      buttons: [
        {
          type: 'custom',
          label: 'Click me',
          url: 'https://payloadcms.com',
          newTab: true,
        },
        {
          type: 'page',
          label: "Don't click me",
          page: '{{SAMPLE_PAGE_ID}}',
        },
      ],
    },
  ],
  title: 'Home',
  image: '{{IMAGE_ID}}',
  slug: 'home',
  meta: {
    title: 'Home Page Title',
    description: 'This should be optimized for SEO.',
    keywords: 'payload, nextjs, headless cms, boilerplate',
  },
};
