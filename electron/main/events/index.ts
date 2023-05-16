type EventImportItem = { default: { listen: Function } };

export default {
  listen() {
    const eventImport: Record<string, EventImportItem> = import.meta.globEager('./modules/*.ts');

    Object.values(eventImport).map((item: { default: any }) => {
      item.default.listen();
    });
  },
};
