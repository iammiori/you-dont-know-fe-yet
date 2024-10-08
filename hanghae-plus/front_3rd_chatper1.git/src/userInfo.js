import { StorageManager } from './util/storageManager';

const STORAGE_KEYS = ['username', 'email', 'bio'];

const UserInfo = (() => {
  let user = StorageManager.getItem('user') || {
    username: '',
    email: '',
    bio: '',
  };

  const save = () => {
    StorageManager.setItem('user', user);
  };

  return {
    get(key) {
      if (!STORAGE_KEYS.includes(key)) {
        return undefined;
      }
      return user[key];
    },
    set(key, value) {
      if (!STORAGE_KEYS.includes(key)) {
        return;
      }
      user[key] = value;
      save();
    },
    clear() {
      user = { username: '', email: '', bio: '' };
      StorageManager.removeItem('user');
    },
  };
})();

export default UserInfo;
