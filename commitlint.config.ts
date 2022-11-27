import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['pages', 'components', 'styles', 'utils', 'assets', 'api', 'config']
    ],
    'scope-empty': [2, 'never']
  }
};

module.exports = Configuration;
