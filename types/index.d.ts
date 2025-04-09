declare module "spatial-design-system/utils/utils.js" {
  type Item = {
    color: string;
    title: string;
    textColor: string;
  }

  export function stringifyForHTML(items: Item[]): string
}
