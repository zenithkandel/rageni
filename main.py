from PIL import Image
import os

def compress_webp_files_in_place(folder, quality=50):
    # Loop through all files in the folder
    for filename in os.listdir(folder):
        if filename.lower().endswith('.webp'):
            # Open the image file
            img_path = os.path.join(folder, filename)
            img = Image.open(img_path)

            # Save compressed file in the same location
            img.save(img_path, 'WEBP', quality=quality)
            print(f"Compressed and overwritten {filename} with quality={quality}")

            # Optionally, you can choose to delete original files if the task involves separate originals.
            # In this case, no need for deletion since we overwrite in place.
            # However, ensure that the file was properly saved to avoid losing data.
            
# Example usage
folder = 'assets/images'  # Replace with the folder where your .webp files are

compress_webp_files_in_place(folder, quality=50)
