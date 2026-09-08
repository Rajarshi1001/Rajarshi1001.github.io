export type Project = {
  slug: string;
  name: string;
  tag: string;
  status: 'stable' | 'active' | 'archived';
  summary: string;
  detail: string;
  stack: string[];
  href?: string;
  metric: string;
};

export const projects: Project[] = [
  {
    slug: 'safe-exploration-continuous-action-spaces',
    name: 'Safe-RL exploration',
    tag: 'Reinforcement learning',
    status: 'archived',
    summary: 'DDPG and TD3 agents that explore safely in continuous-action spaces with physical constraints violation.',
    detail:
      'A 3-layer feedforward safety network sits after every deterministic policy update in custom OpenAI Gym environments (Box-2D, a spaceship lander), correcting actions before they execute. Zero safety violations across 10,000+ episodes, while recovering 85–95% of the optimal unsafe policy\'s performance.',
    stack: ['PyTorch', 'DDPG', 'TD3', 'Gymnasium', 'Policy-gradient'],
    href: 'https://github.com/Rajarshi1001/CS780_Project',
    metric: '0 violations / 10k+ episodes',
  },
  {
    slug: 'ecommerce-review-score-forecasting-mlflow',
    name: 'E-commerce review score forecasting using MLFlow',
    tag: 'MLOps',
    status: 'archived',
    summary: 'A 4-stage MLOps pipeline — ingest, clean, train, evaluate — for forecasting e-commerce review scores.',
    detail:
      'Built with ZenML across ingestion, cleaning, training, and evaluation stages, with automated deployment through the MLflow model registry on a custom ZenML stack. Cut manual deployment steps by 60% and serves live inference through MLflow\'s model deployer.',
    stack: ['ZenML', 'MLflow', 'Python'],
    href: 'https://github.com/Rajarshi1001/MLOps_demo',
    metric: 'F-score 0.88',
  },
  {
    slug: 'neural-machine-translation-challenge',
    name: 'indic-NMT',
    tag: 'NLP',
    status: 'archived',
    summary: 'Neural machine translation between English and seven major Indian languages encompassing LSTM, GRU, and Transformer architectures with various encoding strategies.',
    detail:
      'Compared LSTM/GRU with attention against a Transformer using periodic positional embeddings, with BoW, TF-IDF, FastText, and GloVe encoding strategies evaluated along the way. The Transformer architecture reached a BLEU score of 0.101 on a curated multilingual validation set.',
    stack: ['PyTorch', 'Transformers', 'FastText', 'GloVe'],
    href: 'https://github.com/Rajarshi1001/NMT_challenge',
    metric: 'BLEU 0.101',
  },
  {
    slug: 'unicycle-model-patterns',
    name: 'Unicycle Trajectory Patterns',
    tag: 'Robotics',
    status: 'archived',
    summary: 'Trajectory generation and tracking for a unicycle model using bounded generating functions, ODE-based control laws, and ROS/Gazebo simulation, validated on a Turtlebot 3.',
    detail:
      'Implemented trajectory generation for a differentiable holonomic drive in ROS with Gazebo simulations, alongside MATLAB scripts for bounded generating functions and range-based control laws solved via Euler Integration and fourth-order Runge-Kutta methods. Designed Type 1 and Type 2 unicycle trajectories across multiple target points using intermediate bounded-region trajectories with switching radii derived from their generating functions, then validated the algorithm on a Turtlebot 3 (Burger) while managing latency through ROS Multimaster.',
    stack: ['ROS', 'Gazebo', 'MATLAB', 'Turtlebot 3', 'Controller Design', 'ODEs'],
    href: 'https://github.com/Jadit19/unicycle-model-patterns',
    metric: 'Validated on Turtlebot 3',
  },
  {
    slug: 'IITK-SemEval-2024-Task-1',
    name: 'Semantic Textual Relatedness in Multilingual Contexts',
    tag: 'NLP',
    status: 'archived',
    summary: 'Cross-lingual semantic textual relatedness system for SemEval 2024 Task 1, spanning supervised, unsupervised, and cross-lingual tracks with contrastive learning and custom relatedness metrics.',
    detail:
      'Built an effective semantic textual similarity pipeline across languages for SemEval 2024 Task 1, covering supervised, unsupervised, and cross-lingual tracks. Explored SentenceBERT for sentence embedding extraction alongside unigram/bigram extraction with negative sampling for data generation in the unsupervised track. Implemented contrastive learning with a DistilRoBERTa model and a trainable feed-forward layer for the supervised track, and Transformer-based Sequential Denoising Auto-Encoders (TSDAE) for relatedness scoring in the unsupervised task. Designed a custom relatedness metric combining lexical and distance-based measures with their higher-order variants, and authored the system description paper detailing the approach for submission to SemEval 2024, NAACL \'24.',
    stack: ['PyTorch', 'SentenceBERT', 'DistilRoBERTa', 'TSDAE', 'Transformers', 'Contrastive Learning', 'NLP'],
    href: 'https://github.com/Rajarshi1001/IITK-SemEval-2024-Task-1',
    metric: 'SemEval-NAACL 2024',
  },
  {
    slug: 'isro-inter-iit-tech-meet-11',
    name: 'Lunar Atlas creation from Chandrayaan Orbiter imagery',
    tag: 'Computer Vision',
    status: 'archived',
    summary: "Super-resolution pipeline for ISRO's Chandrayaan lunar mapping challenge, fusing multi-payload orbiter imagery into a high-resolution digital lunar atlas.",
    detail:
      "Developed an ML model to generate high-resolution lunar maps from Chandrayaan Orbiter imaging payloads for Inter IIT Tech Meet 11.0. Built a global digital lunar atlas in MATLAB from medium/low-resolution data using a custom image-stitching pipeline with efficient storage for large-scale imagery. Implemented SRGAN on overlapping data from the Orbiter High Resolution Camera (OHRC) and Terrain Mapping Camera-2 (TMC-2) payloads to upscale medium-resolution (5-10 m) lunar images to high resolution (30 cm).",
    stack: ['MATLAB', 'SRGAN', 'PyTorch', 'Image Stitching'],
    href: 'https://github.com/lunar-atlas/isro-inter-iit-tech-meet-11',
    metric: 'Lunar Atlas',
  },
  {
    slug: 'Inter-IIT-Tech-Meet-2022',
    name: 'Jux - Solar Flare Detection and Classification',
    tag: 'Data Science',
    status: 'archived',
    summary: "Standalone web application for detecting and classifying solar flares from X-ray lightcurve data, built for ISRO's Inter IIT Tech Meet 10.0 and released as a PyPI package named 'jux'.",
    detail:
      'Developed Jux, a standalone web-based application for identifying solar flares from lightcurve files for Inter IIT Tech Meet 10.0. Applied preprocessing techniques including FFT smoothening, windowing, and interpolation on raw solar flare data, followed by a filtering approach using slope and height thresholding combined with Isolation Forest for feature detection and classification. Built a plug-and-analyze website for handling solar flare data using React and Flask, and packaged and deployed the complete codebase as a functional Python package on PyPI (v1.0.0).',
    stack: ['React', 'Flask', 'Isolation Forest', 'PyPI', 'Python', 'FFT', 'EDA'],
    href: 'https://github.com/Rajarshi1001/Inter-IIT-Tech-Meet-2022',
    metric: 'Jux v1.0.0 on PyPI',
  },
  {
    slug: 'Shastra',
    name: 'Orbital Dynamics Challenge',
    tag: 'Orbital Mechanics',
    status: 'archived',
    summary: 'Real-time satellite geolocation calculator that transforms Keplerian orbital parameters and imager attitude quaternions into ground coordinates, built for Shastra 2023, IIT Madras.',
    detail:
      "Built a real-time calculator to infer a satellite's geographical coordinates from its Keplerian orbital parameters and the imager's attitude quaternions using coordinate transformations. Implemented the pipeline by transforming perifocal parameters to the Earth-Centered Inertial (ECI) frame, then to Earth-Centered Earth-Fixed (ECEF), and finally to World Geodetic System (WGS84) coordinates. Designed and deployed an end-to-end web application on Vercel using ReactJS.",
    stack: ['ReactJS', 'Vercel', 'Orbital Mechanics'],
    href: 'https://github.com/Jadit19/Shastra',
    metric: 'Shastra 2023',
  },
  {
    slug: 'Big Data Analytics',
    name: 'Scientific Visualization projects',
    tag: 'Data Visualization',
    status: 'archived',
    summary: 'Scientific visualization pipeline for volumetric scalar and vector field data, covering isocontour extraction, volume rendering, and streamline generation using VTK.',
    detail:
      "Implemented isocontour extraction via the marching squares algorithm on 2D hurricane data and Phong-illuminated volume rendering of 3D hurricane scalar field data using the VTK library, for CS661 (Big Data Analytics) under Prof. Soumya Dutta. Built custom dynamic isosurface and value-distribution plots using ipywidgets for interactive exploration of the hurricane scalar field data. Implemented streamline generation from seed locations in 3D tornado vector field data using bidirectional RK4 integration.",
    stack: ['VTK', 'Python', 'ipywidgets'],
    href: 'https://github.com/Rajarshi1001/CS661',
    metric: 'CS661',
  },

];
