import Dexie, { type EntityTable } from 'dexie';

interface PageList {
  id: number;
  pageId: string;
  name: string;
  content: Record<string, unknown>;
}

const db = new Dexie('ui_puzzles_editor') as Dexie & {
  pages: EntityTable<
    PageList,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  pages: '++id, name, pageId', // primary key "id" (for the runtime!)
});

export type { PageList };

export { db };
