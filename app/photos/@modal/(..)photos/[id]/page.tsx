import Modal from '@/components/Modal';
import PhotoCard from '@/components/PhotoCard';
import photos from '@/lib/photos';
import { Photo } from '@/shared/photo';

export default function PhotoModal({ params: { id } }: { params: { id: string } }) {
    const photo: Photo = photos.find((p) => p.id === id)!;

    return (
        <Modal>
            <PhotoCard photo={photo} />
        </Modal>
    );
}
