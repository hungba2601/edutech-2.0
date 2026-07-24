
import React from 'react';

export interface AppItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: React.ReactNode;
  isFree?: boolean;
  isHot?: boolean;
  isNew?: boolean;
  isGifted?: boolean;
  videoUrl?: string;
  buttonLabel?: string;
  secondaryLabel?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
  description: string;
  apps: AppItem[];
}
