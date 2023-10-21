import {Component, ElementRef} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {ImageFile} from "../../interfaces/imageFile";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent {

  public categories : Category[] | undefined;
  files: ImageFile[] = [];

  newItemForm : any;
  loading = false;
  submitted = false;
  returnUrl = '';
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService,
              private elRef:ElementRef) {

    categoryService.getAll().subscribe(data => {
      this.categories = data.result;
    });
  }

  ngOnInit() {
    this.newItemForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      categoryId: ['', [Validators.required]],
      price: ['', [Validators.required,Validators.minLength(1) ]],
      description: ['', [Validators.required,Validators.minLength(1) ]],
      image: ['', []]
    });
    console.log(this.route.snapshot)
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.newItemForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.newItemForm.invalid) {
      console.log("form isn't valid");
      return;
    }

    this.loading = true;

    // @ts-ignore
    this.getAsByteArray(document.getElementById("img_up").files[0]).then( array => {
      this.productService.save(this.newItemForm.value, Array.from(array)).subscribe( response => {
        if (response.success) {
          this.router.navigate(['/']);
        }
      })
    })
  }

  onDropFiles(files: ImageFile[]): void {
    this.files = files;
    let dragAndDropContainer = this.elRef.nativeElement.getElementsByClassName("img-row img-drag-and-drop")[0];
    let imgDisplayContainer = this.elRef.nativeElement.getElementsByClassName("img-row img-display")[0];

    dragAndDropContainer.style.display = "none";
    imgDisplayContainer.style.display = "flex";

    // this.f.image = this.files[0].url;
    // @ts-ignore

  }

  onImageRemove() {
    this.files = [];
    let dragAndDropContainer = this.elRef.nativeElement.getElementsByClassName("img-row img-drag-and-drop")[0];
    let imgDisplayContainer = this.elRef.nativeElement.getElementsByClassName("img-row img-display")[0];

    dragAndDropContainer.style.display = "";
    imgDisplayContainer.style.display = "none";
  }

  async getAsByteArray(file:any) {
    // @ts-ignore
    return new Uint8Array(await this.readFile(file))
  }

  readFile(file: any) {
    return new Promise((resolve, reject) => {
      // Create file reader
      let reader = new FileReader()

      // Register event listeners
      // @ts-ignore
      reader.addEventListener("loadend", e => resolve(e.target.result))
      reader.addEventListener("error", reject)

      // Read file
      reader.readAsArrayBuffer(file)
    })
  }
}
