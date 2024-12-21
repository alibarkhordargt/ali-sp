import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    downloadPdfButton: PaletteColor;
    downloadExcelButton: PaletteColor;
    loadingBg: PaletteColor;
  }

  interface PaletteOptions {
    downloadPdfButton?: PaletteColorOptions;
    downloadExcelButton?: PaletteColorOptions;
    loadingBg: PaletteColor;
  }
}
