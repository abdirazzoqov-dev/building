import { useState } from 'react';
import { FaMapMarkerAlt, FaBed, FaRulerCombined, FaBuilding, FaHome } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FaHeart as FaHeartSolid } from 'react-icons/fa';
import { Property } from '@/types';
import { formatPrice } from '@/shared/utils';
import { cn } from '@/shared/utils';
import { Badge, Card } from '@/shared/ui';

interface PropertyCardProps {
  property: Property;
  variant?: 'large' | 'small';
  loading?: boolean;
  onClick?: () => void;
}

const badgeVariants: Record<string, 'primary' | 'secondary' | 'success' | 'warning'> = {
  primary: 'primary',
  secondary: 'secondary',
  yellow: 'warning',
  green: 'success',
};

export function PropertyCard({
  property,
  variant = 'large',
  loading = false,
  onClick,
}: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  if (variant === 'small') {
    return (
      <Card
        hoverable
        padding="none"
        shadow="sm"
        border
        className="overflow-hidden group cursor-pointer transition-all duration-250"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <img
            src={property.image}
            alt={property.title}
            className={cn(
              'w-full h-full object-cover transition-transform duration-500',
              imageLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-105'
            )}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <button
            onClick={handleWishlistToggle}
            className={cn(
              'absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center',
              'bg-white/95 backdrop-blur-sm shadow-sm',
              'transition-all duration-200',
              'hover:scale-110 active:scale-95',
              'focus:outline-none focus:ring-2 focus:ring-primary/50',
              isWishlisted ? 'text-secondary-500' : 'text-gray-400 hover:text-secondary-500'
            )}
            aria-label={isWishlisted ? "Saralashdan olib tashlash" : "Saralashga qo'shish"}
            aria-pressed={isWishlisted}
          >
            {isWishlisted ? (
              <FaHeartSolid className="w-4 h-4" />
            ) : (
              <FiHeart className="w-4 h-4" />
            )}
          </button>
        </div>
        <div className="p-4 space-y-2">
          <h4 className="font-bold text-gray-900 text-body-sm leading-tight line-clamp-1">
            {property.rooms > 0 ? `${property.rooms} xona` : 'Hovli uy'}, {property.area} m²
          </h4>
          <p className="text-caption text-gray-500 line-clamp-1">{property.location}</p>
          <p className="text-h6 font-extrabold text-primary-600">
            {formatPrice(property.price)}
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card
      hoverable
      padding="none"
      shadow="sm"
      className="overflow-hidden group cursor-pointer transition-all duration-250"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={property.image}
          alt={property.title}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500',
            imageLoaded ? 'opacity-100' : 'opacity-0',
            'group-hover:scale-110'
          )}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Badge Overlay */}
        {property.badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge
              variant={badgeVariants[property.badge.color] || 'primary'}
              size="sm"
              className="shadow-md"
            >
              {property.badge.text}
            </Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={cn(
            'absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center',
            'bg-white/95 backdrop-blur-sm shadow-md',
            'transition-all duration-200',
            'hover:scale-110 hover:shadow-lg active:scale-95',
            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
            isWishlisted ? 'text-secondary-500' : 'text-gray-600 hover:text-secondary-500'
          )}
          aria-label={isWishlisted ? "Saralashdan olib tashlash" : "Saralashga qo'shish"}
          aria-pressed={isWishlisted}
        >
          {isWishlisted ? (
            <FaHeartSolid className="w-5 h-5" />
          ) : (
            <FiHeart className="w-5 h-5" />
          )}
        </button>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-3">
        {/* Property Type */}
        <div className="flex items-center gap-2 text-body-sm text-gray-500">
          {property.type === 'apartment' ? (
            <FaBuilding className="w-4 h-4" />
          ) : (
            <FaHome className="w-4 h-4" />
          )}
          <span className="line-clamp-1">{property.title}</span>
        </div>

        {/* Price - Prominent */}
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
            {formatPrice(property.price)}
          </h3>
          {property.price > 10_000_000 && (
            <p className="text-caption text-gray-500 mt-0.5">
              ${Math.round(property.price / 12450).toLocaleString('uz-UZ')} (~USD)
            </p>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-body-sm text-gray-600">
          <FaMapMarkerAlt className="w-4 h-4 text-primary-500 flex-shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Features Divider */}
        <div className="flex items-center gap-4 text-body-sm text-gray-600 pt-3 border-t border-gray-200">
          {property.rooms > 0 && (
            <div className="flex items-center gap-1.5">
              <FaBed className="w-4 h-4 text-gray-400" />
              <span className="font-medium">{property.rooms} xona</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <FaRulerCombined className="w-4 h-4 text-gray-400" />
            <span className="font-medium">{property.area} m²</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
