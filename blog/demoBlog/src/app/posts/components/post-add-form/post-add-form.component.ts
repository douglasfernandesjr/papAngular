import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostStoreService } from '../../services/post-store.service';
import { BlogPostApiModel } from '../../models/blog-post-api-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.css']
})
export class PostAddFormComponent implements OnInit {

  pageForm: FormGroup;
  saving: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: PostStoreService,
    private snackBar: MatSnackBar) {

    this.pageForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', [Validators.required,]],
      image: ['', [Validators.required,]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }


  save(): void {
    if (this.pageForm.valid && !this.saving) {
      this.saving = true;

      const model: BlogPostApiModel = this.pageForm.value as BlogPostApiModel;
      this.store.add(model).subscribe(data => {
        this.saving = false;
        this.snackBar.open('Saved!','OK', { duration: 1000});
      });
    }
  }

}
