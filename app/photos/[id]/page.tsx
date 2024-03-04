import Link from 'next/link';
import photos from '@/lib/photos';
import PhotoCard from '@/components/PhotoCard';
import { Photo } from '@/shared/photo';
import type { Metadata, ResolvingMetadata } from 'next';
import slugify from 'slugify';

type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    console.log('>> slug:: ', slugify('vũ ngọc đoàn', { locale: 'vi' }));

    // read route params
    const photoId = params.id;

    // Find item
    const photo: Photo = photos.find((p) => p.id === photoId)!;

    return {
        title: photo.name,
        description: photo.username,
        openGraph: {
            title: 'Nguyễn Đình Tiến',
            description: 'Quen biết đéo gì mà chào!',
            type: 'website',
            images: [
                `https://raw.githubusercontent.com/doanmelody2607/sharing-host-file/main/anhhai.jpg`,
            ],
        },
    };
}

export default function PhotoPage({ params }: Props) {
    const photo: Photo = photos.find((p) => p.id === params.id)!;

    return (
        <section className="py-24">
            <div className="container">
                <div>
                    <Link href="/photos" className="font-semibold italic text-sky-600 underline">
                        Back to photos
                    </Link>
                </div>

                <div className="mt-10 w-1/3">
                    <PhotoCard photo={photo} />
                </div>
            </div>
        </section>
    );
}
