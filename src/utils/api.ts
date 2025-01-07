export async function getVideos() {
  const response = await fetch('https://www.python.distribuidoravega.cl/py/wp-json/wp/v2/video');
  const videos = await response.json();
  
  return Promise.all(
    videos.map(async (video: any) => {
      let imageUrl = '';
      if (video._links['wp:featuredmedia']) {
        const mediaId = video._links['wp:featuredmedia'][0].href.split('/').pop();
        const mediaResponse = await fetch(`https://www.python.distribuidoravega.cl/py/wp-json/wp/v2/media/${mediaId}`);
        const mediaData = await mediaResponse.json();
        imageUrl = mediaData.guid.rendered;
      }
      
      return {
        id: video.id,
        date: video.date,
        content: video.content.rendered,
        imageUrl,
        name: video.acf?.name || '',
        note: video.acf?.note || '',
        bpm: video.acf?.bpm || '',
        url_dk: video.acf?.url_dk || '',
        url: video.acf?.url || '',
        estilo: video.acf?.estilo || '',
        url_mp3: video.acf?.url_mp3 || '',

      };
    })
  );
}