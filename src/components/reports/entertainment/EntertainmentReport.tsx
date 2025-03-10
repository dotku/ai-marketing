import React from "react";
import { Typography } from "antd";
import { GameReport } from "./GameReport";
import { MovieReport } from "./MovieReport";
import { MusicReport } from "./MusicReport";

const { Title } = Typography;

export const EntertainmentReport: React.FC = () => {
  return (
    <div className="space-y-8">
      <Title level={1} className="mb-8">
        娱乐业市场分析
      </Title>
      <GameReport />
      <MovieReport />
      <MusicReport />
    </div>
  );
};
