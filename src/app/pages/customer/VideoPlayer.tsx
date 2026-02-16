import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { MessageSquare } from 'lucide-react';
import { videos } from '../../data/mockData';
import { Button } from '../../components/ui/button';
import { ChatPanel } from '../../components/ChatPanel';
import { FloatingChatButton } from '../../components/FloatingChatButton';

export function VideoPlayer() {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const video = videos.find((v) => v.id === videoId);
  const relatedVideos = videos.filter((v) => v.id !== videoId).slice(0, 3);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <>
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="bg-white dark:bg-card border border-border rounded-xl overflow-hidden transition-colors duration-200">
        <div className="aspect-video bg-black flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">▶</div>
            <div>Video Player Placeholder</div>
            <div className="text-sm opacity-70 mt-2">{video.title}</div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h2>{video.title}</h2>
          <p className="text-muted-foreground">{video.description}</p>
          
          <Button
            onClick={() => setIsChatOpen(true)}
            className="bg-[var(--button-primary)]"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Chat Support
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-card border border-border rounded-xl p-6 transition-colors duration-200">
        <h3 className="mb-4">Related Videos</h3>
        <div className="space-y-3">
          {relatedVideos.map((relVideo) => (
            <button
              key={relVideo.id}
              onClick={() => navigate(`/customer/videos/${relVideo.id}`)}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors text-left">
              <img
                src={relVideo.thumbnail}
                alt={relVideo.title}
                className="w-32 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <div className="font-medium">{relVideo.title}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {relVideo.duration}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isChatOpen && <ChatPanel onClose={() => setIsChatOpen(false)} />}
    </div>

    <FloatingChatButton />
    </>
  );
}
