import { relations } from "drizzle-orm";
import {
  int,
  mysqlEnum,
  mysqlTable,
  uniqueIndex,
  varchar,
  serial,
  timestamp,
  text,
  boolean,
  index,
  primaryKey,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable(
  "users",
  {
    uid: serial("uid").primaryKey(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    shortBio: text("short_bio"),
    avatar: text("avatar"),
  },
  (t) => ({
    nameIdx: index("name_idx").on(t.name),
    emailIdx: uniqueIndex("email_idx").on(t.email),
  })
);

export const userMeta = mysqlTable("user_meta", {
  uMetaId: serial("u_meta_id").primaryKey(),
  lastLogin: timestamp("last_login"),
  userId: int("user_id"),
  level: int("level").default(0),
});

export const quizzes = mysqlTable(
  "quiz",
  {
    id: serial("id").primaryKey(),
    question: text("question").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
    point: int("point").default(1),
    difficulty: mysqlEnum("difficulty", ["easy", "medium", "hard"]).default(
      "easy"
    ),
    authorId: int("author_id").notNull(),
    categoryId: int("category_id"),
    languageId: int("language_id"),
  },
  (t) => ({
    difficultyIdx: index("difficulty_idx").on(t.difficulty),
    categoryIdIdx: index("category_id_idx").on(t.categoryId),
  })
);

export const quizAnswers = mysqlTable(
  "quiz_answers",
  {
    id: serial("id").primaryKey(),
    content: text("content").notNull(),
    quizId: int("quiz_id").notNull(),
    isCorrect: boolean("is_correct").default(false),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
    authorId: int("author_id").notNull(),
  },
  (t) => ({
    quizIdIdx: index("quiz_id_idx").on(t.quizId),
  })
);

export const quizCategory = mysqlTable(
  "quiz_category",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).unique().notNull(),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
    authorId: int("author_id").notNull(),
  },
  (t) => ({
    descriptionIdx: index("description_idx").on(t.description),
    nameIdx: index("category_name_idx").on(t.name),
  })
);

export const languages = mysqlTable(
  "languages",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).unique().notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
  },
  (t) => ({
    languageNameIdx: index("language_name_idx").on(t.name),
  })
);
export const quizLanguage = mysqlTable(
  "quiz_language",
  {
    langaugeId: int("language_id").primaryKey(),
    quizId: int("quiz_id").primaryKey(),
  },
  (t) => ({
    languageIdIdx: index("language_id_idx").on(t.langaugeId),
    quizIdIdx: index("quiz_id_idx").on(t.quizId),
  })
);

export const quizSubCategory = mysqlTable(
  "quiz_sub_category",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).unique(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at"),
    categoryId: int("category_id").notNull(),
  },
  (t) => ({
    subCategoryNameIdx: index("sub_category_name_idx").on(t.name),
    categoryIdIdx: index("category_id_idx").on(t.categoryId),
  })
);

// relations
export const userMetaRelations = relations(userMeta, ({ one }) => ({
  user: one(users, {
    fields: [userMeta.userId],
    references: [users.uid],
  }),
}));
export const usersRelations = relations(users, ({ one, many }) => ({
  quizzes: many(quizzes),
  categories: many(quizCategory),
  meta: one(userMeta, {
    fields: [users.uid],
    references: [userMeta.userId],
  }),
}));

export const quizRelations = relations(quizzes, ({ one, many }) => ({
  user: one(users, {
    fields: [quizzes.authorId],
    references: [users.uid],
  }),
  answers: many(quizAnswers),
  category: one(quizCategory, {
    fields: [quizzes.categoryId],
    references: [quizCategory.id],
  }),
  language: one(quizLanguage, {
    fields: [quizzes.languageId],
    references: [quizLanguage.langaugeId],
  }),
}));
export const languagesRelations = relations(languages, ({ many }) => ({
  quizzes: many(quizzes),
}));
export const quizAnswerRelations = relations(quizAnswers, ({ one }) => ({
  quiz: one(quizzes, {
    fields: [quizAnswers.quizId],
    references: [quizzes.id],
  }),
}));
export const quizCategoryRelations = relations(
  quizCategory,
  ({ one, many }) => ({
    quizzes: many(quizzes),
    user: one(users, {
      fields: [quizCategory.authorId],
      references: [users.uid],
    }),
    subCategory: one(quizSubCategory, {
      fields: [quizCategory.id],
      references: [quizSubCategory.categoryId],
    }),
  })
);
export const quizSubCategoryRelations = relations(
  quizSubCategory,
  ({ many }) => ({
    categories: many(quizCategory),
  })
);
