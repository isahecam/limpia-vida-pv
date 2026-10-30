import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

/** Tipos permitidos en `type(scope): subject`. */
const types = [
  "feat", // nueva funcionalidad
  "fix", // corrección de un bug
  "docs", // solo documentación
  "style", // formato, sin cambiar el significado del código
  "refactor", // ni corrige un bug ni agrega funcionalidad
  "perf", // mejora de rendimiento
  "test", // agrega o corrige pruebas
  "build", // sistema de build o dependencias
  "ci", // configuración y scripts de CI
  "chore", // mantenimiento que no toca src ni pruebas
  "revert", // revierte un commit anterior
];

/** Scopes opcionales; si se indican, deben ser uno de estos. */
const scopes = ["app", "ui", "api", "auth", "db", "config", "deps", "tooling", "release"];

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Header corto para `git log --oneline` y la UI de GitHub.
    "type-enum": [RuleConfigSeverity.Error, "always", types],
    "header-max-length": [RuleConfigSeverity.Error, "always", 72],
    "scope-enum": [RuleConfigSeverity.Error, "always", scopes],
    "subject-min-length": [RuleConfigSeverity.Error, "always", 3],

    // Body y footer separados por una línea en blanco.
    "body-leading-blank": [RuleConfigSeverity.Error, "always"],
    "footer-leading-blank": [RuleConfigSeverity.Error, "always"],

    // Un breaking change exige `!` en el header y footer `BREAKING CHANGE:`.
    "breaking-change-exclamation-mark": [RuleConfigSeverity.Error, "always"],

    // Solo avisa: las líneas largas, como stack traces, no bloquean el commit.
    "body-max-line-length": [RuleConfigSeverity.Warning, "always", 100],
    "footer-max-line-length": [RuleConfigSeverity.Warning, "always", 100],
  },
  // Merges, reverts, fixup/squash y versiones ya se ignoran por defecto.
  defaultIgnores: true,
  ignores: [
    // Dependabot genera sus propios subjects y bodies largos.
    (message) => /^Signed-off-by: dependabot\[bot\] <support@github\.com>$/m.test(message),
  ],
  helpUrl: "https://www.conventionalcommits.org/en/v1.0.0/#summary",
};

export default config;
