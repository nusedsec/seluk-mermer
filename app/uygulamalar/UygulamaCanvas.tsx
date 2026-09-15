
"use client";

import styles from "./UygulamaCanvas.module.css";

interface CanvasProps {
  activeStep: number;
}

export default function UygulamaCanvas({ activeStep }: CanvasProps) {
  const stepTexts = [
    "Lazer tarama verisi ile dijital rölöve nokta bulutu işleniyor.",
    "Bookmatch damar takibi ve 3D mermer kaplama simülasyonu aktif.",
    "Waterjet / CNC kesim yörüngeleri vektörel olarak hesaplanıyor.",
    "Saha montaj kılavuzu ve tolerans analiz haritası hazır."
  ];

  return (
    <div className={styles.canvasBox}>
      <div className={styles.canvasBadge}>3D_CAD_RENDER</div>
      <div className={styles.canvasCube}>3D</div>
      <div className={styles.canvasStepNum}>SİMÜLASYON ADIMI: 0{activeStep + 1}</div>
      <div className={styles.canvasStepText}>{stepTexts[activeStep]}</div>
    </div>
  );
}