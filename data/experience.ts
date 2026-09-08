export type ExperienceEntry = {
  version: string;
  range: string;
  role: string;
  org: string;
  changes: string[];
  stack: string[];
  /** Optional public repo / write-up for the role, when one exists. */
  href?: string;
};

// Framed like release notes for a career — each role is a version bump.
export const experience: ExperienceEntry[] = [
  {
    version: 'v3.0.0',
    range: 'Feb 2025 — present',
    role: 'Data Scientist',
    org: 'American Express · Commercial Marketing Decision Sciences, Credit & Fraud Risk',
    changes: [
      'Architected a multi-offer ranking framework on response-to-gross scores with a 96% match rate, replacing 3 XGBoost models with 2 segmentations — $60M revenue impact for the Email channel across commercial and consumer card offers.',
      'Built a Spend-Centric propensity model in XGBoost across 90+ features (spend, risk, contact history, real-time triggers), consolidating 8+ channel-specific models into one deployed for daily scoring across the entire US AIF base — $30M incremental GCM.',
      'Developed an aggregated Contact History variable joined across multiple channel tables, shipped to production with full UAT and a daily refresh cadence — a 3% lift in Gini.',
      'Owned the model end-to-end: base creation, risk suppressions, variable attachment to scoring, tracking, and analytical runs, under model governance and validation.',
      // 'Shipped an LSTM-based response model with attention-weight visualization and sequence-level SHAP for interpretability — an estimated 15% increase in conversion.',
      'Led the migration of 3 marketing models from PySpark ETL to BigQuery, refactoring feature pipelines and automating model tracking — 30% runtime reduction.',
    ],
    stack: ['XGBoost', 'Microsoft Office', 'EDA', 'Deployment', 'Model tracking', 'SHAP', 'PySpark', 'BigQuery', 'Python', 'Dask', 'Google Cloud Platform'],
  },
  {
    version: 'v2.1.0',
    range: 'Jul 2024 — Dec 2024',
    role: 'Data Scientist',
    org: 'Decision Point Analytics · Pricing & Promotion Modelling',
    changes: [
      'Built a Hybrid RAG sales-insights tool with Reciprocal Rank Fusion (LangChain + Pinecone), using chain-of-thought reasoning over metadata-filtered sales reports — cut manual review time by 5%.',
      'Streamlined SKU-level promotion modeling across 500+ SKUs in 12 markets using discount adjustments, VARMAX, and OLS.',
      'Built an MLflow-based automated forecasting pipeline for monthly SKU-level scoring with periodic model refresh.',
    ],
    stack: ['LangChain', 'Pinecone', 'MLflow', 'VARMAX', 'SARIMA', 'OLS', 'Python', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    version: 'v1.0.0',
    range: 'May 2023 — Aug 2023',
    role: 'MITACS Research Intern',
    org: 'Clean Energy Group, University of Toronto Scarborough · under Prof. Oleksandr Voznyy',
    changes: [
      'Implemented graph message-passing networks (relational ConvNet with bidirectional updates and residual connections) and CGCNN for band-gap and orbital-energy prediction on zincblende and rocksalt crystal structures.',
      'Designed a custom magpie, orbital-aware, and structural embedding scheme — MSE of 0.03 and 0.23 across the two prediction tasks.',
      'Built an XGBoost band-gap predictor from 2048-dimension Morgan fingerprints, reaching an MSE of 0.30.',
    ],
    stack: ['PyTorch', 'Graph Neural Nets', 'Multilayer perceptron','XGBoost', 'Slurm', 'Tensorboard', 'Bash Scripts'],
    href: 'https://github.com/Rajarshi1001/Mitacs23',
  },
];
