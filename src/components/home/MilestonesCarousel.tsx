"use client";

import Link from "next/link";
import { Pause, Play, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { achievements } from "@/data/portfolio";

export function MilestonesCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className={`milestones-showcase${isPaused ? " is-manually-paused" : ""}`}>
      <div className="milestones-showcase-header">
        <span>12 milestones</span>
        <button className="milestones-playback" type="button" aria-pressed={isPaused} aria-label={isPaused ? "Resume milestones carousel" : "Pause milestones carousel"} onClick={() => setIsPaused((paused) => !paused)}>
          {isPaused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}<span>{isPaused ? "Play" : "Pause"}</span>
        </button>
      </div>

      <div className="milestones-carousel" aria-label="Achievement milestones carousel">
        <div className="milestones-carousel-track">
          <div className="milestones-carousel-group">
            {achievements.map((achievement, index) => <AchievementCard key={achievement.id} achievement={achievement} index={index} compact />)}
          </div>
          <div className="milestones-carousel-group" aria-hidden="true">
            {achievements.map((achievement, index) => <AchievementCard key={`${achievement.id}-duplicate`} achievement={achievement} index={index} compact />)}
          </div>
        </div>
      </div>

      <div className="milestones-showcase-footer"><span>Continuous record / 12 entries</span><Link className="button button-secondary milestones-cta" href="/achievements">View All Achievements <ArrowUpRight size={15} /></Link></div>
    </div>
  );
}
