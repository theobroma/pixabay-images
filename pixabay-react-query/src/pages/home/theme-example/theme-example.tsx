import { ThemeEnum } from '@/enums/theme.enum';
import { useUIStore } from '@/store/ui.store';

export const ThemeExample = () => {
  const currentTheme = useUIStore((state) => state.theme);
  const { setTheme } = useUIStore();

  return (
    <div>
      <button type="button" onClick={setTheme(ThemeEnum.DeepPurpleAmber)}>
        set theme Dark
      </button>
      <span>currentTheme:&nbsp;{currentTheme}</span>
    </div>
  );
};
