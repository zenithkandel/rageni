from PIL import Image
import os

def compress_images_in_place(folder, quality=80):
    # Loop through all files in the folder
    for filename in os.listdir(folder):
        # Check if the file is PNG, JPG, or JPEG
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            # Open the image file
            img_path = os.path.join(folder, filename)
            img = Image.open(img_path)

            # Remove the original extension to save as .webp
            file_root = os.path.splitext(filename)[0]
            output_path = os.path.join(folder, f"{file_root}.webp")

            # Save the image as .webp with the desired quality
            img.save(output_path, 'WEBP', quality=quality)
            print(f"Compressed {filename} and saved as {output_path}")

            # Delete the original PNG/JPG/JPEG file
            os.remove(img_path)
            print(f"Deleted original {filename}")

# Example usage
folder = 'assets/images'  # Replace with the folder where your images are stored

compress_images_in_place(folder, quality=80);